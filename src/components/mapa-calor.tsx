"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type { HeatPoint } from "@/lib/data";

export type HeatLayer = { points: HeatPoint[]; gradient?: Record<number, string> };
export type MapMarker = { lat: number; lng: number; popup?: string; color?: string };

export default function MapaCalor({
  center,
  layers = [],
  markers = [],
}: {
  center: [number, number];
  layers?: HeatLayer[];
  markers?: MapMarker[];
}) {
  const elRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const overlays = useRef<any[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      // @ts-expect-error plugin sem tipos
      await import("leaflet.heat");
      if (cancelled || !elRef.current) return;

      if (!mapRef.current) {
        const map = L.map(elRef.current).setView(center, 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap",
          maxZoom: 19,
        }).addTo(map);
        mapRef.current = map;
        setTimeout(() => map.invalidateSize(), 200);
      }
      const map = mapRef.current;

      overlays.current.forEach((o) => map.removeLayer(o));
      overlays.current = [];

      layers.forEach((ly) => {
        if (!ly.points?.length) return;
        // @ts-expect-error heatLayer vem do plugin
        const heat = L.heatLayer(ly.points, { radius: 26, blur: 20, maxZoom: 15, gradient: ly.gradient }).addTo(map);
        overlays.current.push(heat);
      });

      markers.forEach((m) => {
        const mk = L.circleMarker([m.lat, m.lng], {
          radius: 7,
          color: "#11261a",
          weight: 1,
          fillColor: m.color || "#9a682e",
          fillOpacity: 0.9,
        }).addTo(map);
        if (m.popup) mk.bindPopup(m.popup);
        overlays.current.push(mk);
      });
    })();
    return () => {
      cancelled = true;
    };
  }, [center, layers, markers]);

  return <div ref={elRef} className="h-full w-full rounded-lg" />;
}
