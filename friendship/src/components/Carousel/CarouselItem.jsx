import PropTypes from 'prop-types';

export default function CarouselItem(props) {
    return (
      <div className="hidden duration-700 ease-in-out" data-carousel-item>
        <img
          src={props.src}
          className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    );
}

CarouselItem.propTypes = {
    src: PropTypes.string.isRequired,
};
