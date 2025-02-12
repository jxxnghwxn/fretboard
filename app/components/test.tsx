export default function Controller() {
  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4 w-80 p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Instrument & Tuning */}
      <div className="col-span-1 bg-white p-4 rounded-lg shadow flex flex-col gap-4">
        <div>
          <label
            htmlFor="instrument"
            className="block text-gray-700 font-medium mb-1"
          >
            Instrument
          </label>
          <select
            id="instrument"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="guitar">Guitar</option>
            <option value="bass">Bass</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="tuning"
            className="block text-gray-700 font-medium mb-1"
          >
            Tuning
          </label>
          <select
            id="tuning"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="EADGBE">EADGBE</option>
            <option value="DADGAD">DADGAD</option>
          </select>
        </div>
      </div>

      {/* Accidentals & Notes */}
      <div className="col-span-2 bg-white p-4 rounded-lg shadow flex flex-col gap-4">
        <div>
          <label
            htmlFor="accidental"
            className="block text-gray-700 font-medium mb-1"
          >
            Accidental
          </label>
          <select
            id="accidental"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="flat">Flat</option>
            <option value="sharp">Sharp</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="note"
            className="block text-gray-700 font-medium mb-1"
          >
            Note
          </label>
          <select
            id="note"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="C">C</option>
            <option value="Db">Db</option>
            <option value="D">D</option>
            <option value="Eb">Eb</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="Gb">Gb</option>
            <option value="G">G</option>
            <option value="Ab">Ab</option>
            <option value="A">A</option>
            <option value="Bb">Bb</option>
            <option value="B">B</option>
          </select>
        </div>
      </div>

      {/* Scale or Chord */}
      <div className="bg-white p-4 rounded-lg shadow">
        <label
          htmlFor="scaleChord"
          className="block text-gray-700 font-medium mb-1"
        >
          Scale or Chord
        </label>
        <select
          id="scaleChord"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="major">Major</option>
          <option value="minor">Minor</option>
          <option value="maj7">Maj7</option>
          <option value="min7">Min7</option>
          <option value="dom7">Dom7</option>
        </select>
      </div>

      {/* System */}
      <div className="bg-white p-4 rounded-lg shadow">
        <label
          htmlFor="system"
          className="block text-gray-700 font-medium mb-1"
        >
          System
        </label>
        <select
          id="system"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="major">Major</option>
          <option value="minor">Minor</option>
          <option value="majPenta">Maj Penta</option>
          <option value="minPenta">Min Penta</option>
          <option value="diminished">Diminished</option>
        </select>
      </div>

      {/* Fingering */}
      <div className="bg-white p-4 rounded-lg shadow">
        <label
          htmlFor="fingering"
          className="block text-gray-700 font-medium mb-1"
        >
          Fingering
        </label>
        <select
          id="fingering"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="CAGED">CAGED</option>
          <option value="3NPS">3NPS</option>
          <option value="all">All</option>
        </select>
      </div>

      {/* Number of Frets */}
      <div className="bg-white p-4 rounded-lg shadow">
        <label htmlFor="frets" className="block text-gray-700 font-medium mb-1">
          Number of Frets
        </label>
        <select
          id="frets"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="bar">Bar</option>
          {/* 필요시 추가 옵션 */}
        </select>
      </div>

      {/* Fret Marker */}
      <div className="col-span-2 bg-white p-4 rounded-lg shadow">
        <label className="block text-gray-700 font-medium mb-1">
          Fret Marker
        </label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fretMarkerType"
              className="block text-gray-600 mb-1"
            >
              Marker Type
            </label>
            <select
              id="fretMarkerType"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="note">Note</option>
              <option value="degree">Degree</option>
              <option value="interval">Interval</option>
              <option value="none">None</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="fretMarkerAccent"
              className="block text-gray-600 mb-1"
            >
              Accent
            </label>
            <select
              id="fretMarkerAccent"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="root">Root</option>
              <option value="third">Third</option>
              <option value="fifth">Fifth</option>
              <option value="seventh">Seventh</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
