import React, { useState } from "react";
import background from "../assets/background.png";
import petgrooming from "../assets/petgrooming.png";
import petclinic from "../assets/petClinic.png";
import petdaycare from "../assets/petdaycare.png";
import pettraining from "../assets/pettraining.png";
import paw4 from "../assets/paw4.png";

function Categories() {
  const [category, setCategory] = useState("Pet Grooming");

  const categoriesData = [
    {
      name: "Pet Grooming",
      description:
        "Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nails.",
      url: `${petgrooming}`,
    },
    {
      name: "Pet Clinic",
      description:
        "The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners.",
      url: `${petclinic}`,
    },
    {
      name: "Pet Daycare",
      description:
        "Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage.",
      url: `${petdaycare}`,
    },
    {
      name: "Pet Training",
      description:
        "Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise.",
      url: `${pettraining}`,
    },
  ];

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };

  const currentCategory = categoriesData.find((cat) => cat.name === category);

  return (
    <div
      className="h-[100vh] flex"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-start w-[50%] px-36 pt-5">
        <h1 className="text-3xl font-serif">Categories</h1>

        <div className="mt-12">
          {currentCategory && (
            <div>
              <h2 className="text-2xl font-serif font-bold ">{currentCategory.name}</h2>
              <p className="mt-2 font-sans">{currentCategory.description}</p>
              <button className="border mt-5 w-[90px] h-[35px] text-xs rounded text-black  bg-[#C7E7E1]">Get Started</button>
            </div>
          )}
        </div>


        <div className="absolute bottom-[23%]">
          <div className="flex gap-2">
            {categoriesData.map((cat) => (
              <div
                key={cat.name}
                className={`flex items-center rounded ${
                  cat.name === category ? "bg-[#124C5F]" : ""
                }`}
                onClick={() => handleCategoryClick(cat.name)}
              >
                <img src={paw4} alt="paw" className="w-8 h-8 cursor-pointer" />
                <button
                  className={`w-[130px] h-[25px] font-semibold rounded ${
                    cat.name === category ? "text-white" : "text-black"
                  }`}
                  
                >
                  {cat.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-20 pt-[40px] w-[50%]">
        {currentCategory && (
          <img
            src={currentCategory.url}
            alt={currentCategory.name}
            className="mt-5 "
          />
        )}
      </div>
     
    </div>
  );
}

export default Categories;
