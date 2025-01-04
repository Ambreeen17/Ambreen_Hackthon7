import FilterSidebar from "../Components/FilterSideBar";




const Home: React.FC = () => {
  const cars = [
    { name: "Koenigsegg", price: 99, image: "1.png" },
    { name: "Nissan GT - R", price: 80, image: "2.png" },
    { name: "Rolls Royce", price: 96, image: "3(3).png" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <FilterSidebar />
        <div className="flex-1 space-y-6">
        
        </div>
      </div>
    </div>
    
  );
};

export default Home;
