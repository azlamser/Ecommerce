import BoyDetail from "./Boys"

function Home(){

  function data(){
    let a =new Array(20).fill()
  return  a.map((_,i)=>{
      return <BoyDetail key={i}/>
      
    })

  }



return (
    <>
    <main>
    <section>
      <div className="flex justify-center">
        <button className="box">gents</button>

        <button className="box">ladies</button>
<button className="box ">Child</button>
</div>
 </section>
 <section className="flex flex-wrap justify-center">

{data()}


</section>


   
    </main>
    </>
)
}
export default Home