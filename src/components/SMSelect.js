import  Select  from "react-select";


    function SMSelect () {
        const options = [
          { value: "Ronaldo", label: "Ronaldo" },
          { value: "Messi", label: "Messi" },
          { value: "Neymar", label: "Neymar" },
          { value: "Ozil", label: "Ozil" },
        ];

        return (
          <div className="container">
            <div className="mt-5 m-auto w-50">
             <Select options={options} />
              
            </div>
          </div>
        );
      };
      
      export default SMSelect;



