"use client";
export default function Error({ error }: { error: Error }) {
  return <div className="container">No se pudo cargar el tour 3D. {error.message}</div>;
}
