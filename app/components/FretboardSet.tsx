export default function Controller() {
  return (
    <div className="b grid grid-cols-3 gird-rows-4 gap-2 mx-20 my-5">
      <div className="flex flex-col gap-2">
        <div>instrument</div>
        <div className="flex gap-2 justify-center items-center">
          <div>guitar</div>
          <div>bass</div>
        </div>
      </div>

      <div className="col-span-2 flex gap-2 ">
        <div className="flex gap-2 justify-center items-center">
          <div>flat</div>
          <div>sharp</div>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <div>C</div>
          <div>Db</div>
          <div>D</div>
          <div>Eb</div>
          <div>E</div>
          <div>F</div>
          <div>Gb</div>
          <div>G</div>
          <div>Ab</div>
          <div>A</div>
          <div>Bb</div>
          <div>B</div>
        </div>
      </div>

      <div>
        <div>scale or chord</div>
        <div>
          <div>major</div>
          <div>minor</div>
          <div>maj7</div>
          <div>min7</div>
          <div>dom7</div>
        </div>
      </div>

      <div>
        <div>system</div>
        <div>
          <div>major</div>
          <div>minor</div>
          <div>maj penta</div>
          <div>min penta</div>
          <div>diminished</div>
        </div>
      </div>

      <div>
        <div>fingering</div>
        <div className="flex">
          <div>CAGED</div>
          <div>3NPS</div>
          <div>all</div>
        </div>
      </div>

      <div>
        <div>number of fret</div>
        <div>bar</div>
      </div>

      <div className="col-span-2 flex flex-col">
        <div>fretmarker</div>
        <div className="flex">
          <div className="flex">
            <div>note</div>
            <div>degree</div>
            <div>interval</div>
            <div>none</div>
          </div>
          <div className="flex">
            <div>root</div>
            <div>third</div>
            <div>fifth</div>
            <div>seventh</div>
          </div>
        </div>
      </div>
    </div>
  );
}
