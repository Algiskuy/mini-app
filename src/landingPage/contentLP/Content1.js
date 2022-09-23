import React from "react";
import { Algis1, Laborer, MA, PDL, PIT, PMR } from "../fotoLanding/Foto";
import "./Content1.css";

export default function Content1() {
  return (
    <div className="content1">
      <h2>Experience</h2>
      <br />
      {/* pengalaman */}
      <div className="experience">
        <div className="e-content">
          <div className="e-fill">
            <img src={Laborer} alt="foto 1" className="e-c-avatar" />
          </div>

          <div className="e-f-content">
            <p className="e-c-text">Laborer</p>
            <small className="small">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              delectus fuga assumenda ut est minus magni officiis sapiente sequi
              rerum dolor molestiae itaque, pariatur ad? Consectetur quia dicta
              tempora provident?
            </small>
          </div>
        </div>
        <div className="e-content">
          <div className="e-fill">
            <img src={PDL} alt="foto 1" className="e-c-avatar" />
          </div>
          <div className="e-f-content">
            <p className="e-c-text">PKL (Pratek Dakwah Lapangan)</p>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              delectus fuga assumenda ut est minus magni officiis sapiente sequi
              rerum dolor molestiae itaque, pariatur ad? Consectetur quia dicta
              tempora provident?
            </small>
          </div>
        </div>
        <div className="e-content">
          <div className="e-fill">
            <img src={Algis1} alt="foto 1" className="e-c-avatar" />
          </div>
          <div className="e-f-content">
            <p className="e-c-text">Asisten Bendahara Pondok</p>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              delectus fuga assumenda ut est minus magni officiis sapiente sequi
              rerum dolor molestiae itaque, pariatur ad? Consectetur quia dicta
              tempora provident?
            </small>
          </div>
        </div>
      </div>
      {/* pendidikan */}
      <div className="education">
        <h2>Education</h2>
        <div className="e-content">
          <div className="e-fill">
            <img src={MA} alt="foto 1" className="e-c-avatar" />
          </div>
          <div className="e-f-content">
            <p className="e-c-text">MA.Baitul Hikmah</p>
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
              tempora possimus. Mollitia adipisci unde minima earum ratione!
              Voluptatem maiores ad sed, accusantium commodi nostrum dignissimos
              sapiente hic aliquid, optio dolorem.
            </small>
          </div>
        </div>
        <div className="e-content">
          <div className="e-fill">
            <img src={PIT} alt="foto 1" className="e-c-avatar" />
          </div>
          <div className="e-f-content">
            <p className="e-c-text">Pondok IT</p>
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
              tempora possimus. Mollitia adipisci unde minima earum ratione!
              Voluptatem maiores ad sed, accusantium commodi nostrum dignissimos
              sapiente hic aliquid, optio dolorem.
            </small>
          </div>
        </div>
        <div className="e-content">
          <div className="e-fill">
            <img src={PMR} alt="foto 1" className="e-c-avatar" />
          </div>
          <div className="e-f-content">
            <p className="e-c-text">Pondok programmer </p>
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
              tempora possimus. Mollitia adipisci unde minima earum ratione!
              Voluptatem maiores ad sed, accusantium commodi nostrum dignissimos
              sapiente hic aliquid, optio dolorem.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
