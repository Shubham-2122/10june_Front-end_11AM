import React from 'react'

function Flex() {
    return (
        <div>
            {/* <div className="flex justify-start">
                <div className="size-53 border-2">1</div>
                <div className="size-53 border-2">2</div>
                <div className="size-53 border-2">3</div>
            </div>
               <div className="flex justify-end">
                <div className="size-53 border-2">1</div>
                <div className="size-53 border-2">2</div>
                <div className="size-53 border-2">3</div>
            </div>
               <div className="flex justify-center">
                <div className="size-53 border-2">1</div>
                <div className="size-53 border-2">2</div>
                <div className="size-53 border-2">3</div>
            </div>
               <div className="flex justify-around">
                <div className="size-53 border-2">1</div>
                <div className="size-53 border-2">2</div>
                <div className="size-53 border-2">3</div>
            </div>
               <div className="flex justify-between">
                <div className="size-53 border-2">1</div>
                <div className="size-53 border-2">2</div>
                <div className="size-53 border-2">3</div>
            </div>
            <div className="flex flex-row">
                <div className="size-53 border-2">1</div>
                <div className="size-53 border-2">2</div>
                <div className="size-53 border-2">3</div>
            </div>
             <div className="flex flex-col">
                <div className="size-53 border-2">1</div>
                <div className="size-53 border-2">2</div>
                <div className="size-53 border-2">3</div>
            </div>
             <div className="flex flex-row-reverse">
                <div className="size-53 border-2">1</div>
                <div className="size-53 border-2">2</div>
                <div className="size-53 border-2">3</div>
            </div> */}



            {/* <div className="flex">
                <div className='w-1/3 border-2'>1</div>
            <div className='w-1/3 border-2'>2</div>
            <div className='w-1/3 border-2'>2</div>
            </div> */}

            <div className="flex flex-wrap gap-4 justify-center">
                <div className="size-52 border-2">
                    <img className='blur-sm' src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">
                     <img className='brightness-100' src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">
                     <img  src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">
                     <img className='contrast-200' src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">
                     <img className='grayscale-50' src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">
                     <img className='hue-rotate-180' src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">
                     <img className='blur-sm' src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">
                     <img className='blur-sm' src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">
                     <img className='blur-sm' src="https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?_gl=1*kdkmbh*_ga*OTgxMzcxNzg3LjE3NTE4ODEzNTk.*_ga_8JE65Q40S6*czE3NjE5ODEyMTAkbzI5JGcwJHQxNzYxOTgxMjEwJGo2MCRsMCRoMA.." alt="" style={{height:"100%",width:"100%"}} />
                </div>
                <div className="size-52 border-2">1</div>
                <div className="size-52 border-2">1</div>
                <div className="size-52 border-2">1</div>
                <div className="size-52 border-2">1</div>
                <div className="size-52 border-2">1</div>
                <div className="size-52 border-2">1</div>
                <div className="size-52 border-2">1</div>
            </div>

            {/* <div className="grid grid-cols-3">
                <div className="border-2">1</div>
                <div className="border-2 col-span-2 row-span-2">2</div>
                <div className="border-2">3</div>
                <div className="border-2">4</div>
                <div className="border-2">5</div>
                <div className="border-2">6</div>
                <div className="border-2">7</div>
                <div className="border-2">8</div>
            </div> */}
        </div>
    )
}

export default Flex
