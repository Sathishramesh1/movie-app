
import "./App.css"


  function Pagination({nPages,currentPage,setCurrentPage}){

    console.log(nPages)

    let PageNumbers = [ ...Array(nPages+1).keys()].slice(1);

    console.log(PageNumbers)

    const goToPrevious = ()=>{
        console.log("exe","previous")
        if(currentPage !== 1){
            setCurrentPage(currentPage-1)
        }else if(currentPage == 1){
             alert("You reached Starting Page")
        }
    }


    console.log(currentPage)

    const goToNext =() =>{
        console.log("exe","next")
        if(currentPage !== nPages){
            setCurrentPage(currentPage+1)
        }else if(currentPage == nPages){
            alert("You reached Destination Page")
       }
    }


      return(
        <>
        <div className="pagination-container">
            <div className="pagination-list">
                <div onClick={goToPrevious} className="page">Previous</div>
                 {
                    PageNumbers.map((pageNo)=>{
                        return(
                            <div onClick={()=>setCurrentPage(pageNo)} className="page">{pageNo}</div>
                        )
                    })
                 }
                 <div className="page" onClick={goToNext}>Next</div>
            </div>
        </div>
        </>
      )
  }
  export default Pagination;