export default function HomeCarousel() {
  const imgAddr =
    "https://assets.newatlas.com/dims4/default/e8ab15c/2147483647/strip/true/crop/1620x1080+150+0/resize/1200x800!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Ff6%2Fbb%2F47b7f90245f08a2cf15fe1fcb72f%2Foceanbird-image-wallenius-marine-1.jpg";

  return (
    <>
      <div className="mx-auto">
        <img src={imgAddr} className="w-3/4" />
      </div>
    </>
  );
}
