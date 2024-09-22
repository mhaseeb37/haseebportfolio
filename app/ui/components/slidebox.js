import OutlineNumber from "./outlinenumber"
export default function Slidebox(props) {
    return(
        <div className="relative border bg-[#ffdb67] p-10 border-[#000000] before:block before:absolute before:-inset-0 before:rotate-0 before:w-full before:border before:border-[#000000] before:z-[-1] before:transition-transform before:duration-300 after:block after:absolute after:-inset-0 after:-rotate-0 after:w-full after:border after:border-[#000000] after:z-[-1] after:transition-transform after:duration-300 hover:before:rotate-2 hover:after:-rotate-2">
            <OutlineNumber number={props.number} fontsize={200}/>
          </div>
    )
}