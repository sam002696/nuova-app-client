import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ExplanationOfCondition from "./ExplanationOfCondition";
import RoomHallStairsLanding from "./RoomHallStairsLanding";
import RoomKitchen from "./RoomKitchen";
import RoomOthers from "./RoomOthers";
import axios from "axios";
import Swal from "sweetalert2";

const Inventory = ({ singleProperty }) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:5500/api/inventory/upload/${singleProperty._id}`,
        data
      );
      if (res.data) {
        Swal.fire(
          "Success!",
          "You successfully uploaded the details!",
          "success"
        );
        reset();
        setLoading(false);
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" w-5/6 mx-auto mb-10 mt-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 divide-y-2 divide-gray-200"
        >
          <div className="space-y-8 divide-y-2 divide-gray-200 sm:space-y-5">
            <ExplanationOfCondition />

            <RoomHallStairsLanding
              register={register}
              singleProperty={singleProperty}
            />

            <RoomKitchen register={register} />

            <RoomOthers register={register} />
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                {loading ? "Saving" : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Inventory;
