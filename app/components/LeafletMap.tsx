"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default marker icon issue with bundlers
const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

interface LeafletMapProps {
    center?: [number, number];
    zoom?: number;
    markerPosition?: [number, number];
    popupText?: string;
    className?: string;
}

export default function LeafletMap({
    center = [51.5033, -0.1196],
    zoom = 15,
    markerPosition = [51.5033, -0.1196],
    popupText = "SuperMart — London Eye Branch",
    className = "",
}: LeafletMapProps) {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            className={className}
            style={{ width: "100%", height: "100%", borderRadius: "1rem" }}
        >
            {/* Dark-toned map tiles for a premium feel */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />
            <Marker position={markerPosition} icon={customIcon}>
                <Popup>
                    <div style={{ textAlign: "center" }}>
                        <strong
                            style={{
                                color: "#fc7d00",
                                fontSize: "13px",
                                fontWeight: 800,
                            }}
                        >
                            🛒 {popupText}
                        </strong>
                        <br />
                        <span
                            style={{
                                fontSize: "11px",
                                color: "#555",
                            }}
                        >
                            Visit us anytime!
                        </span>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
}
