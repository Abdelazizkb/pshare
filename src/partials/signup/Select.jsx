import React,{ useState} from 'react'

function Select({name}) {

  const [checked, setChecked] = useState(false)

  return (
        <div class="max-w-md mx-auto overflow-visible">
                <label for="select" class="font-semibold block py-2 capital">Sélectionnez {name}</label>

                <div class="relative">
                    <div class="h-10 bg-white flex py-5 border border-gray-200 rounded items-center">
                        <input Placeholder="Javascript" name={name} id="select" class="px-4 appearance-none  outline-none text-gray-800 w-full " onFocus={()=>setChecked(!checked)} />

                        <button onClick={e=>{console.log(e.target)}} class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600" >
                        <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                        </button>
                        <label for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600" onClick={()=>setChecked(!checked)}>
                        <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        </label>
                    </div>

                    <div class={`absolute rounded shadow bg-white overflow-hidden  x flex-col w-full mt-1 border border-gray-200 z-50 ${checked ? "flex" : "hidden"}`}>
                        <div class="cursor-pointer group">
                        <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Python</a>
                        </div>
                        <div class="cursor-pointer group border-t">
                        <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">Javascript</a>
                        </div>
                        <div class="cursor-pointer group border-t">
                        <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">Node</a>
                        </div>
                        <div class="cursor-pointer group border-t">
                        <a class="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">PHP</a>
                        </div>
                    </div>
            </div>
            <script src="https://unpkg.com/tailwindcss-jit-cdn"></script>
        </div>  
  )
}

export default Select