export default function MainGrid() {
  return (
    <div
      className="grid grid-cols-6 grid-rows-6 gap-8 w-full max-w-full max-h-full mx-auto p-8"
      style={{
        height: "860px",
        paddingLeft: 32,
        paddingRight: 32,
        paddingTop: 72,
        paddingBottom: 32,
      }}
    >
      {/* Left card rectangle */}
      <div className="row-span-4 col-span-1 bg-gray-100 rounded-2xl p-4 -mb-16 -mr-16"/>

      {/* Top middle rectangle */}
      <div className="row-span-4 col-span-4 bg-gray-100 rounded-2xl p-4 mx-16"/>

      {/* Right card rectangle */}
      <div className="row-span-4 col-span-1 bg-gray-100 rounded-2xl p-4 -mb-16 -ml-16" />

      {/* Bottom left rectangle */}
      <div className="row-span-2 col-span-1 bg-gray-100 rounded-2xl p-4 mt-16 -mr-16" />

      {/* Bottom middle with circle */}
      <div className="row-span-2 col-start-2 col-end-6 flex items-center justify-start bg-gray-100 rounded-2xl p-16 mt-16 mx-16">
        <div className="w-24 h-24 bg-gray-300 rounded-full" />
      </div>

      {/* Bottom right rectangle */}
      <div className="row-span-2 col-span-1 bg-gray-100 rounded-2xl p-4 mt-16 -ml-16" />
    </div>
  );
}