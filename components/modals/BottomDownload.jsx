import DownloadButtons from '../DownloadButtons';

const BottomDownload = () => {
  return (
    <div className="mt-10 px-12 sm:pb-3 border-t">
      <div className="w-full justify-center mt-5">
        <h2 className="font-semibold text-sm mt-2 -mb-4 text-center">
          Download our mobile app
        </h2>
        <DownloadButtons
          dark
          center
          labelColor="text-black"
          captionColor="text-gray-500"
          className="border border-gray-700 bg-white shadow-soft"
        />
      </div>
    </div>
  );
};

export default BottomDownload;
