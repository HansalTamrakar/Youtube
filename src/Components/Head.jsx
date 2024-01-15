import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YoutubeApi } from "./Constants";

const Head = () => {
  const [searchquery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  // async function getSearchSuggestions() {
  //   fetch(
  //     "https://clients1.google.com/complete/search?hl=en&output=toolbar&q=home",
  //     {
  //       mode: "no-cors",
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => console.error("Error:", error));
  // }

  // useEffect(() => {
  //   getSearchSuggestions();
  // }, [searchquery]);

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 justify-between">
        <img
          onClick={() => {
            toggleMenuHandler();
          }}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"
          alt=""
        />
        <img
          alt="no"
          className="h-12 mx-2 w-28 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSAIvw3bBynfijsVgItIoOLbHVPkDdXCVcQ&usqp=CAU"
        />
      </div>

      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded"
          type="text"
          value={searchquery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button className="border border-black h-12 w-28 rounded-lg ml-4 hover:bg-red-500 hover:text-lg font-bold ">
          Search
        </button>
      </div>
      <div>
        <img
          className="h-8 mt-3"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAY1BMVEX///8AAADV1dWLi4v4+PgbGxv8/PzDw8Pe3t6xsbFnZ2dFRUXj4+Pq6urn5+d9fX2qqqpOTk4jIyOTk5O7u7uioqJeXl4TExM8PDycnJxWVlZvb2/KysozMzN2dnbx8fErKyun6xAFAAAE3klEQVRoge1b2ZKqMBSUVXZRFEcE8f+/8so4jiE5STohjnWr7PfQkJy1c1itPvjgg/8G4Vgm/np/w9pPyjH8Q+okDbI88hhEeRakyR9Q+4fWk6I9+C+kjv0gknP/7EPgxy8hH+utjvuObT06Jy+CHUY+YRcUTsnLC859x6V0Rl5tTMknbCon5GFztGH3vGPjIBr4X3bkE76W+mF8siefcFrkhWW3jN3zugUmuF5KPmFty35wwe55ByvyOHDD7nmBhQHEZ1fsnnc2519sdCw60293yn7jN/p+lzt/h9H+O7O6JwKc3ZHHzQH7n5NoIwKMP+Vr2D0Pir+ujf4JyPwX5jgVTnp2/3XsnqfN/+GC6kKPL1390xg8LMrbG3Jt7c+gUbNXcF2XN331Xc+PVd/k6Kqjuv5Ea9qsn6/rM3DhRsUOunxLdBGFovdjoXJ+rJtI6cUptPgiZy+Q9Vep9/hXZL28/0IS3aDwXX8AHiBNfSPQRR6VIkICOM5O1v/WwLtr4hYSM2t6aQz075qwAYWtLZ15gDcftDkrBo6f3kHA8CQuxwJwP9r49LH7C0jYsT5nRdQ6YO+BfA3VC9TuA8sgxQaIXdRn6GP2FlIrQr0DtcQy/Usrs9UTQNYUFyX6RZJ4wQOIXmLoBBymJ7gI9PoniQ4MeD2oGQP7KHo+UK6AQl2lf1LGrwmBcs3d1+e8D41Averu7CM+6SJVHhDxJyBFF1/xATuGtuhIzcSfI1IntJBCESMlLx/1kZ5e0yP8AOpU+F5/D6zBBApIGtnb0OdIvocaLit6RB/BlBk7+lxPj3WbPD0oJ2lPHxTF+G1ERQ1N4EXCxwTe8dB1g9L5KqTLor4CVtO2ijvCEbxoFIMuknLuyKUdegmLHELKQRLuAxL3MxBDhYSLlBu/2BAbUJrcNQrlhpmIPTScBVYNanTfEHMnJo08cU5/36BKTeV/sXJAPY/Brr0EwaU1uNp+gIge5g+xB2G4oDDmAlSTBUbr6HqV1BPH6xUMHlTmgKL+pi/GMkmJ6Latk3Isesj9SHlD/+pPf084ms2vMQH+T8oLWs/PZu193J/OXT4MeXc+9bMqqNBFMLpiVu/+lajyw3AcQ6LpT9XyJi0tKYW1zmgWpVDdB0mENVVjbnoJrbr+lskEclEVbK9YSIO4VFSVGd/RagBhLQkP8lZNIkpZjj9I8r/CiMjrBL4ohkEW74rrBLLiszj3B6jzV96kiiFLq2GrIOrbanFOaE+p5GQAPo3qmmTufdVlvR584a/bS+4S1Xrm54G5+WsvUeeRX2WmIGbOBIyQMcr2zsHMX8mEUkSQZ8YHxG7AHEz/gk3PMM5/XswfMjU4uJeMuSw+fOboYTNmqk6zcSMe7ByIweAak/pUDbUObMNtMDY0G5qyH7hkxzzNhtZm0zOWSYdNOMZnyPJnNvN+bL1rOjDHDa1FxsF3zXYNFuOCXLWYGVmAPyv1bYYlV3zXR0kaNLhGx25UdCVUaw30AiWXsxckTX5MONM+a811WEvGhIkh6V3QS+PQ2AtD/MuGpFfUiPjQ1n7JPTYu/boV1KXFI+IryYD8rjsH9b73b+j3dXDuiAbJyYD86s2/B0x4688RE976a8iEt/4YM+GtvwXd4Z9UP0WdXvlT1ANv/CXsgTf+EPfBBx8sxD8SrEB2niv1BAAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>
      <img
        className="h-12 align-middle "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9IFMkObNH2pz3_dwGsNwCGP8gknLGS0iwmg&usqp=CAU"
        alt=""
      />
    </div>
  );
};

export default Head;
