// eslint-disable-next-line react/prop-types


export const TableHechizo = ({spells}) => { 
        return (
        <>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 mx-20">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-amber-200 dark:bg-amber-200 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 min-w-5">Nombre</th>
                                <th scope="col" className="px-6 py-3">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td scope="row" className="px-6 py-4 w-2/4 font-bold text-gray-900 whitespace-nowrap dark:text-white">{spells.hechizo}</td>
                                <td className="px-6 py-4">{spells.uso}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </>
    
    );
  };