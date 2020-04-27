import React from "react";

export default function DevicePreview({ device, type = "normal" }) {
  return (
    <div className={`DevicePreview DevicePreview--${type}`}>
      <div className="DevicePreview__Container">
        <div className="DevicePreview__Image">
          <img src={device.thumbnail} alt={device.name} />
        </div>
        <div className="DevicePreview__Content">
          <p className="DevicePreview__Name">{device.name}</p>
          <p className="DevicePreview__PromoType">{device.promoType}</p>
          <p className="DevicePreview__PromoQty">{device.promoQty}</p>
          <p className="DevicePreview__Date">{device.availableDate}</p>
        </div>
      </div>
    </div>
  );
}
