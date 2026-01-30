import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const ModalGallery = ({
  setModalOpen,
  handleImageClick,
  imageSelected,
  galleryImages,
}) => {
  console.log(galleryImages);
  return (
    <div>
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm">
        <FaTimes
          onClick={() => setModalOpen(false)}
          className="text-white text-3xl lg:text-4xl cursor-pointer absolute top-12 lg:top-8 lg:right-12 right-6 hover:text-secondary transition-colors duration-300"
        />

        <div className="flex items-center ">
          <button
            onClick={() => handleImageClick(imageSelected - 1)}
            disabled={imageSelected === 0}
            className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white bg-opacity-20   hover:bg-opacity-40 transition-all flex items-center justify-center disabled:bg-slate-200/50 absolute top-1/2 lg:left-10 left-3 translate-y-[-50%] disabled:text-black/70 cursor-pointer"
          >
            <FaChevronLeft className="lg:text-xl" />
          </button>
          <div className="lg:h-[70vh] lg:w-[50vw] w-[70vw] h-[40vh]  ">
            <img
              src={
                galleryImages?.[imageSelected].publicUrl ||
                galleryImages?.[imageSelected].url
              }
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </div>
          <button
            className=" w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-white bg-opacity-20 hover:bg-opacity-40  transition-all flex items-center justify-center disabled:bg-slate-200/50 disabled:text-black/70 absolute top-1/2 lg:right-10 right-3 translate-y-[-50%] cursor-pointer"
            disabled={imageSelected === galleryImages?.length - 1}
            onClick={() => handleImageClick(imageSelected + 1)}
          >
            <FaChevronRight className="lg:text-xl" />
          </button>
        </div>
        <p className="text-white text-lg absolute bottom-10 left-1/2 transform -translate-x-1/2">
          {imageSelected + 1} / {galleryImages.length}
        </p>
      </div>
    </div>
  );
};

export default ModalGallery;
