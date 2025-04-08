interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
};

// This is my advertisment component

function Advertisement(props: AdvertisementProps) {
  return (
    <div className="advertisement">
      <p>{props.companyName}</p>
      <p>{props.productDescription}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Advertisement;
