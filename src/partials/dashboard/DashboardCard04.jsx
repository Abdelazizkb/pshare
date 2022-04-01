import React from 'react'

function Bills() {
  return (
            <div class="col-span-full xl:col-span-5">
                <div class="overflow-auto lg:overflow-visible ">
                    <div className="flex justify-between">
                        <div class=" font-bold">Medical Bills</div>
                        <div class="text-blue-400 text-sm hover:cursor-pointer">Display all ...</div>
                    </div>
                    <table class="table text-gray-400 border-separate space-y-6 text-sm">
                        <thead class="bg-white text-gray-500">
                            <tr>
                                <th class="px-3 py-2">Brand</th>
                                <th class="px-3 py-2 text-left">Category</th>
                                <th class="px-3 py-2 text-left">Price</th>
                                <th class="px-3 py-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white">
                                <td class="px-3 py-1">
                                    <div class="flex align-items-center">
                                        <img class="rounded-full h-12 w-12  object-cover" src="https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" alt="unsplash image"/>
                                        <div class="ml-3">
                                            <div class="">Appple</div>
                                            <div class="text-gray-500">mail@rgmail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-3">
                                    Technology
                                </td>
                                <td class="p-3 font-bold">
                                    200.00$
                                </td>
                                <td class="p-3">
                                    <span class="bg-green-400 text-gray-50 rounded-md px-2">available</span>
                                </td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-3">
                                    <div class="flex align-items-center">
                                        <img class="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="unsplash image"/>
                                        <div class="ml-3">
                                            <div class="">Realme</div>
                                            <div class="text-gray-500">mail@rgmail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-3">
                                    Technology
                                </td>
                                <td class="p-3 font-bold">
                                    200.00$
                                </td>
                                <td class="p-3">
                                    <span class="bg-red-400 text-gray-50 rounded-md px-2">no stock</span>
                                </td>
                            </tr>
                            <tr class="bg-white">
                                <td class="p-3">
                                    <div class="flex align-items-center">
                                        <img class="rounded-full h-12 w-12   object-cover" src="https://images.unsplash.com/photo-1600856209923-34372e319a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2135&q=80" alt="unsplash image"/>
                                        <div class="ml-3">
                                            <div class="">Samsung</div>
                                            <div class="text-gray-500">mail@rgmail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-3">
                                    Technology
                                </td>
                                <td class="p-3 font-bold">
                                    200.00$
                                </td>
                                <td class="p-3">
                                    <span class="bg-yellow-400 text-gray-50  rounded-md px-2">start sale</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
  )
}

export default Bills