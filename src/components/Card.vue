
<template>
   <!-- SEZIONE CARD -->
   <section class="flex flex-col  sm:flex-row sm:gap-[50px] sm:px-[5vw] sm:my-[30px]  ">
      <div class="h-[400px] w-full sm:w-[50%] pt-[20px] bg-gray-300 lg:h-[700px] "></div>
      <div class="flex flex-col sm:w-[50%] pt-[30px]">
         <div class=" lg:pr-[250px] sm:pb-[300px] flex flex-col items-start justify-start px-[20px]">
            <!-- NOME CARD CON PREZZO -->
           <p class="text-grandeMobile sm:text-grande ">lorem ipsum</p>
           <p>500$</p>
           <p>x in stock</p>
           <!-- DESCRIZIONE CARD -->
           <p class="pt-[30px] hidden md:block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni officiis recusandae deleniti voluptates nihil, vel libero voluptatem porro eligendi enim voluptas distinctio, maiores omnis atque aperiam, eius dolorum quod eos!
           In earum nisi iusto qui quam dicta, molestiae corrupti. Possimus tempore amet dolores harum culpa, qui veniam non. Itaque officia veritatis perferendis aliquam quasi, quam dolor architecto fuga beatae quaerat.</p>
           <button class="w-full border-[2px] border-black rounded-md py-[10px] mt-[20px] text-piccolo  ">Add to cart</button>
           <p class="pt-[30px] sm:hidden">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni officiis recusandae deleniti voluptates nihil, vel libero voluptatem porro eligendi enim voluptas distinctio, maiores omnis atque aperiam, eius dolorum quod eos!
           In earum nisi iusto qui quam dicta, molestiae corrupti. Possimus tempore amet dolores harum culpa, qui veniam non. Itaque officia veritatis perferendis aliquam quasi, quam dolor architecto fuga beatae quaerat.</p>
          
         </div>

        
           
      </div>
   </section>


   <!-- PRODOTTI CONSIGLIATI -->
   <section class="px-[20px] sm:px-[5vw] mt-[100px] mb-20">
      <h2 class="text-grandeMobile font-semibold">Prodotti consigliati</h2>

      <div class="sm:grid sm:grid-cols-4 sm:gap-[10px] grid grid-cols-2 gap-[5px]">

         <div class="bg-slate-300 h-[200px] lg:h-[400px]  "></div>
         <div class="bg-slate-300 h-[200px] lg:h-[400px]  "></div>
         <div class="bg-slate-300 h-[200px] lg:h-[400px]  "></div>
         <div class="bg-slate-300 h-[200px] lg:h-[400px]  "></div>
      
      </div>

   </section>

</template>


