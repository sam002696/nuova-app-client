import React, { useEffect, useRef, useState } from "react";
import Pdf from "react-to-pdf";

const InvoiceMaker = () => {
  const ref = useRef();
  const services = [
    { itemDesc: "", qty: "", rate: "" },
    { itemDesc: "", qty: "", rate: "" },
    { itemDesc: "", qty: "", rate: "" },
  ];
  const [serviceList, setServiceList] = useState(services);
  const [subTotal, setSubTotal] = useState();
  const [pdfViewer, setPdfViewer] = useState(true);

  const options = {
    unit: "in",
    format: [10, 8],
    screen: [1920, 1080],
  };
  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { itemDesc: "", qty: "", rate: "" }]);
  };
  const calculateAmount = (quantity, rate) => {
    const quantityNumber = parseFloat(quantity);
    const rateNumber = parseFloat(rate);
    const amount =
      quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

    return amount.toFixed(2);
  };

  useEffect(() => {
    let subTotal = 0;

    serviceList.forEach((productLine) => {
      const quantityNumber = parseFloat(productLine.qty);
      const rateNumber = parseFloat(productLine.rate);
      const amount =
        quantityNumber && rateNumber ? quantityNumber * rateNumber : 0;

      subTotal += amount;
    });

    setSubTotal(subTotal);
  }, [serviceList]);

  const handlePdf = (toPdf) => {
    setPdfViewer(false);
    toPdf();
    setTimeout(() => setPdfViewer(true), 1000);
  };
  return (
    <>
      <div className=" bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-12 lg:pb-16">
          <div
            ref={ref}
            className=" max-w-3xl mx-auto shadow-lg shadow-gray-500/40 py-8 px-2 bg-white rounded-md"
          >
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex ">
                <div className="sm:flex-auto">
                  <h1 className="font-semibold ">
                    <input
                      type="text"
                      name="company"
                      className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0 text-3xl text-gray-600 py-0"
                      placeholder="Your Company"
                    ></input>
                  </h1>
                  <p className="mt-2 text-sm ">
                    <input
                      type="text"
                      name="company"
                      className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0"
                      placeholder="Your Name"
                    ></input>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    <input
                      type="text"
                      name="company"
                      className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0"
                      placeholder="Company's Address"
                    ></input>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {" "}
                    <input
                      type="text"
                      name="company"
                      className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0"
                      placeholder="City, State Zip"
                    ></input>
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {" "}
                    <input
                      type="text"
                      name="company"
                      className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0"
                      placeholder="United Kingdom"
                    ></input>
                  </p>
                </div>
                {pdfViewer && (
                  <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                    <Pdf
                      targetRef={ref}
                      filename="code-example.pdf"
                      options={options}
                    >
                      {({ toPdf }) => (
                        <button
                          type="button"
                          onClick={() => handlePdf(toPdf)}
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
                        >
                          Generate to pdf{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="ml-2 w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                            />
                          </svg>
                        </button>
                      )}
                    </Pdf>
                  </div>
                )}
              </div>

              <div className="flex  justify-between my-5">
                <div>
                  <h1 className=" mb-2 text-gray-600 font-medium text-lg">
                    {" "}
                    Bill to:
                  </h1>
                  <div className=" space-y-2 text-gray-500 text-sm">
                    <div className="">
                      {" "}
                      <input
                        type="text"
                        name="company"
                        className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0"
                        placeholder="Your Client's Name"
                      ></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company"
                        className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0"
                        placeholder="Client's Address"
                      ></input>
                    </div>
                    <div>
                      {" "}
                      <input
                        type="text"
                        name="company"
                        className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0"
                        placeholder="City, State Zip"
                      ></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="company"
                        className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0"
                        placeholder="United States"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className=" space-y-2 ">
                  <div className=" flex justify-between items-center">
                    <p className="text-gray-600 font-medium text-lg">
                      Invoice#
                    </p>
                    <p className=" text-gray-500 text-sm">
                      <input
                        type="text"
                        name="company"
                        className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0 text-end"
                        placeholder="INV-12"
                      ></input>
                    </p>
                  </div>

                  <div className=" flex justify-between items-center">
                    <p className=" mr-7 text-gray-600 font-medium text-lg">
                      Invoice Date:
                    </p>
                    <p className=" text-gray-500 text-sm customdate">
                      <input
                        type="date"
                        name="company"
                        className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0 text-end "
                        placeholder="INV-12"
                      ></input>
                    </p>
                  </div>
                  <div className=" flex justify-between items-center">
                    <p className="text-gray-600 font-medium text-lg">
                      Due Date:
                    </p>
                    <p className=" text-gray-500 text-sm customdate">
                      <input
                        type="date"
                        name="company"
                        className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus  focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600 px-0  text-gray-500 py-0 text-end "
                        placeholder="INV-12"
                      ></input>
                    </p>
                  </div>
                </div>
              </div>

              <div className="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
                <table className="min-w-full divide-y divide-gray-300 relative">
                  <thead>
                    <tr className="bg-cyan-600 ">
                      <th
                        scope="col"
                        className="py-2 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 md:pl-2"
                      >
                        Item Description
                      </th>
                      <th
                        scope="col"
                        className="hidden py-2 px-3 text-start text-sm font-semibold text-white sm:table-cell"
                      >
                        Qty
                      </th>
                      <th
                        scope="col"
                        className="hidden py-2 px-3 text-start pl-6 text-sm font-semibold text-white sm:table-cell"
                      >
                        Rate
                      </th>
                      <th
                        scope="col"
                        className="py-2 pl-3 pr-4 text-right text-sm font-semibold text-white sm:pr-6 md:pr-2"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {serviceList.map((project, index) => (
                      <>
                        <tr className="border-b border-gray-200 relative">
                          <td className="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                            <input
                              type="text"
                              name="itemDesc"
                              className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 placeholder:text-gray-600"
                              placeholder="New Advertising"
                              onChange={(e) => handleServiceChange(e, index)}
                            ></input>
                          </td>
                          <td className="hidden py-4 px-3  text-sm text-gray-500 sm:table-cell">
                            <input
                              type="number"
                              name="qty"
                              className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600"
                              placeholder="1"
                              onChange={(e) => handleServiceChange(e, index)}
                            ></input>
                          </td>
                          <td className="hidden py-4 px-3  text-sm text-gray-500 sm:table-cell">
                            <input
                              type="number"
                              name="rate"
                              className="focus:bg-gray-200 hover:bg-cyan-100 border custom-focus text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500  placeholder:text-gray-600"
                              placeholder="$75.00"
                              onChange={(e) => handleServiceChange(e, index)}
                            ></input>
                          </td>
                          <td className="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                            {/* {sum} */}
                            {calculateAmount(project.qty, project.rate)}
                          </td>
                          {serviceList.length !== index && (
                            <div className="spoiler absolute -right-7 top-6">
                              <button
                                type="button"
                                disabled={serviceList.length - 1 === 0}
                                onClick={() => handleServiceRemove(index)}
                                className="disabled:cursor-not-allowed"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-6 h-6 text-teal-500"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </button>
                            </div>
                          )}
                        </tr>

                        {pdfViewer && serviceList.length - 1 === index && (
                          <div className=" w-full absolute left-0">
                            <button
                              type="button"
                              onClick={handleServiceAdd}
                              className=" flex flex-row items-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4 mt-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="#0088A3"
                                stroke-width="2"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                />
                              </svg>
                              <div className="text-gray-600 underline underline-offset-1 text-sm font-semibold pt-2">
                                Add line unit
                              </div>
                            </button>
                          </div>
                        )}
                      </>
                    ))}
                  </tbody>

                  <tfoot>
                    <tr>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
                      >
                        Subtotal
                      </th>
                      <th
                        scope="row"
                        className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
                      >
                        Subtotal
                      </th>
                      <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                        ${subTotal?.toFixed(2)}
                      </td>
                    </tr>
                    {/* <tr>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
                      >
                        Tax
                      </th>
                      <th
                        scope="row"
                        className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
                      >
                        Tax
                      </th>
                      <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                        $585.00
                      </td>
                    </tr> */}
                    <tr>
                      <th
                        scope="row"
                        colSpan={3}
                        className="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
                      >
                        Total
                      </th>
                      <th
                        scope="row"
                        className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
                      >
                        Total
                      </th>
                      <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">
                        ${subTotal?.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceMaker;
