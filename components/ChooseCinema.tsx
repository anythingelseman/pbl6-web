"use client";
import { Modal } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export default function ChooseCinema() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <div className="flex-1">
      <div role="button" onClick={() => props.setOpenModal("dismissible")}>
        <div className="border-b-2 border-accent pb-1">CGV Đà Nẵng</div>
      </div>

      <Modal
        dismissible
        show={props.openModal === "dismissible"}
        size="md"
        onClose={() => props.setOpenModal(undefined)}
        className="overflow-hidden bg-black"
      >
        <div className="border-2 border-black/60 rounded-md">
          <Modal.Header className="bg-black border-b-0">
            <div className="bg-primary-linear bg-clip-text text-transparent">
              CHOOSE CINEMA YOU WANT TO GO
            </div>
          </Modal.Header>
          <Modal.Body className="bg-black ">
            <ul className="space-y-4">
              <Link href={`/cinema/${"cgv"}`} className="block border-b pb-2 border-accent">
                <li role="button">CGV Đà Nẵng</li>
              </Link>
              <Link href={`/cinema/${"cgv"}`} className="block border-b pb-2 border-accent">
                <li role="button">Starlight</li>
              </Link>

              <Link href={`/cinema/${"cgv"}`} className="block border-b pb-2 border-accent">
                <li role="button">CGV Vĩnh Trung </li>
              </Link>
            </ul>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}
