import React, { useEffect, useState } from "react";
import {
  Building2,
  Truck,
  FileText,
  ChevronDown,
  ChevronUp,
  Save,
} from "lucide-react";
import toast from "react-hot-toast";
import { validationInput } from "../../utils/constant";
import supabase from "../../config/supabse-client";
import { useQuery } from "@tanstack/react-query";
import { getAllTexts } from "../../utils/hooks";
import SimpleLoader from "../../components/SimpleLoader";

const EditText = () => {
  const [openSections, setOpenSections] = useState({
    promotion: true,
    communication: true,
    about: true,
  });

  const {
    data: allTexts = [],
    error,
    isLoading,
    refetch: refreshTexts,
  } = useQuery({
    queryKey: ["allTexts"],
    queryFn: getAllTexts,
    staleTime: 5 * 60 * 1000,
  });

  console.log(allTexts);

  const [formData, setFormData] = useState({
    promotion: {
      mainTitle: "",
      descriptionOne: "",
      descriptionTwo: "",
      keyPoints: [
        { title: "", description: "" },
        { title: "", description: "" },
        { title: "", description: "" },
      ],
    },
    communication: {
      mainTitle: "",
      description: "",
      keyPoints: ["", "", ""],
    },
    about: {
      mainTitle: "",
      descriptionOne: "",
      descriptionTwo: "",
    },
  });
  const [prevAllTexts, setPrevAllTexts] = useState([]);

  if (allTexts.length > 0 && allTexts !== prevAllTexts) {
    setPrevAllTexts(allTexts);
    setFormData({
      promotion: allTexts[0].promotion,
      communication: allTexts[0].communication,
      about: allTexts[0].about,
    });
  }

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleTextChange = (section, field, value, index = null) => {
    setFormData((prev) => {
      const newData = { ...prev };

      if (index !== null && Array.isArray(newData[section][field])) {
        // For arrays (key points)
        const newArray = [...newData[section][field]];

        if (typeof newArray[index] === "object") {
          // For key points with title/description
          newArray[index] = {
            ...newArray[index],
            ...value,
          };
        } else {
          // For simple key points array
          newArray[index] = value;
        }

        newData[section][field] = newArray;
      } else {
        // For simple fields
        newData[section][field] = value;
      }

      return newData;
    });
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <div className="w-[200px] h-[200px]  ">
          <SimpleLoader />
        </div>
      </div>
    );
  const handleChange = async (id) => {
    console.log(id);
    if (validationInput(formData, id) === true) {
      const loading = toast.loading("Enregistrement de vos modifications...");

      const { error } = await supabase
        .from("TextBauhaus")
        .update({ [id]: formData[id] }) // Use [id] to use the variable as the key
        .eq("id", 1);

      toast.dismiss(loading);
      if (error) {
        console.log(error);
        return toast.error(error.message);
      }

      toast.success("Modification enregistrée !");
      refreshTexts();
    }
  };

  return (
    <div className=" mx-auto p-6">
      <div className="space-y-8">
        {/* Promotion Immobilière Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
          <button
            onClick={() => toggleSection("promotion")}
            className="w-full flex items-center justify-between p-6 bg-emerald-50 hover:bg-emerald-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Promotion Immobilière
              </h2>
            </div>
            {openSections?.promotion ? (
              <ChevronUp className="w-6 h-6 text-emerald-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-slate-400" />
            )}
          </button>

          {openSections?.promotion && (
            <div className="p-6 space-y-6 border-t border-slate-200">
              {/* Titre Principal */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Titre Principal
                </label>
                <input
                  type="text"
                  value={formData?.promotion?.mainTitle}
                  onChange={(e) =>
                    handleTextChange("promotion", "mainTitle", e.target.value)
                  }
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Entrez le titre principal"
                />
              </div>

              {/* Description Un */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description Un
                </label>
                <textarea
                  value={formData?.promotion?.descriptionOne}
                  onChange={(e) =>
                    handleTextChange(
                      "promotion",
                      "descriptionOne",
                      e.target.value,
                    )
                  }
                  rows="4"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Entrez la première description"
                />
              </div>

              {/* Description Deux */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description Deux
                </label>
                <textarea
                  value={formData?.promotion?.descriptionTwo}
                  onChange={(e) =>
                    handleTextChange(
                      "promotion",
                      "descriptionTwo",
                      e.target.value,
                    )
                  }
                  rows="4"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Entrez la deuxième description"
                />
              </div>

              {/* Points Clés */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Points Clés
                </label>
                <div className="space-y-4">
                  {formData?.promotion?.keyPoints.map((point, index) => (
                    <div
                      key={index}
                      className="p-4 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div className="mb-2">
                        <input
                          type="text"
                          value={point?.title}
                          onChange={(e) =>
                            handleTextChange(
                              "promotion",
                              "keyPoints",
                              { title: e.target.value },
                              index,
                            )
                          }
                          className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder={`Titre du point clé ${index + 1}`}
                        />
                      </div>
                      <textarea
                        value={point?.description}
                        onChange={(e) =>
                          handleTextChange(
                            "promotion",
                            "keyPoints",
                            { description: e.target.value },
                            index,
                          )
                        }
                        rows="2"
                        className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder={`Description du point clé ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
                onClick={() => handleChange("promotion")}
              >
                <Save className="w-4 h-4" />
                Enregistrer les modifications
              </button>
            </div>
          )}
        </div>

        {/* Communication Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
          <button
            onClick={() => toggleSection("communication")}
            className="w-full flex items-center justify-between p-6 bg-purple-50 hover:bg-purple-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">
                Communication
              </h2>
            </div>
            {openSections?.communication ? (
              <ChevronUp className="w-6 h-6 text-purple-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-slate-400" />
            )}
          </button>

          {openSections?.communication && (
            <div className="p-6 space-y-6 border-t border-slate-200">
              {/* Titre Principal */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Titre Principal
                </label>
                <input
                  type="text"
                  value={formData?.communication?.mainTitle}
                  onChange={(e) =>
                    handleTextChange(
                      "communication",
                      "mainTitle",
                      e.target.value,
                    )
                  }
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Entrez le titre principal"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData?.communication?.description}
                  onChange={(e) =>
                    handleTextChange(
                      "communication",
                      "description",
                      e.target.value,
                    )
                  }
                  rows="4"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Entrez la description"
                />
              </div>

              {/* Points Clés */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Points Clés
                </label>
                <div className="space-y-3">
                  {formData?.communication?.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-medium text-purple-700">
                        {index + 1}
                      </div>
                      <input
                        type="text"
                        value={point}
                        onChange={(e) =>
                          handleTextChange(
                            "communication",
                            "keyPoints",
                            e.target.value,
                            index,
                          )
                        }
                        className="flex-1 p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder={`Point clé ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                onClick={() => handleChange("communication")}
              >
                <Save className="w-4 h-4" />
                Enregistrer les modifications
              </button>
            </div>
          )}
        </div>

        {/* À Propos Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
          <button
            onClick={() => toggleSection("about")}
            className="w-full flex items-center justify-between p-6 bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-slate-800">À Propos</h2>
            </div>
            {openSections.about ? (
              <ChevronUp className="w-6 h-6 text-blue-600" />
            ) : (
              <ChevronDown className="w-6 h-6 text-slate-400" />
            )}
          </button>

          {openSections.about && (
            <div className="p-6 space-y-6 border-t border-slate-200">
              {/* Titre Principal */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Titre Principal
                </label>
                <input
                  type="text"
                  value={formData?.about?.mainTitle}
                  onChange={(e) =>
                    handleTextChange("about", "mainTitle", e.target.value)
                  }
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Entrez le titre principal"
                />
              </div>

              {/* Description Un */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description Un
                </label>
                <textarea
                  value={formData?.about?.descriptionOne}
                  onChange={(e) =>
                    handleTextChange("about", "descriptionOne", e.target.value)
                  }
                  rows="4"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Entrez la première description"
                />
              </div>

              {/* Description Deux */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Description Deux
                </label>
                <textarea
                  value={formData?.about?.descriptionTwo}
                  onChange={(e) =>
                    handleTextChange("about", "descriptionTwo", e.target.value)
                  }
                  rows="4"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Entrez la deuxième description"
                />
              </div>

              <button
                className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                onClick={() => handleChange("about")}
              >
                <Save className="w-4 h-4" />
                Enregistrer les modifications
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditText;
