import React, { useEffect, useState } from 'react'

export default function Game() {
    const [items, setItems] = useState([])
    const [selected, setSelected] = useState(2)
    const [idc, setIdc] = useState(1)

    useEffect(() => {
        console.log("you added a new item");
    }, [items.length])


    function addEle() {


        setItems([...items, { id: idc, x: 680, y: 270 }])
        setIdc(idc + 1)
        console.log(items);

    }

    function up(id) {
        const itemsCopy = [...items];

        const theFoundItem = itemsCopy.find((item) => {
            return item.id == id;
        })
        if (theFoundItem.y > 0) {
            theFoundItem.y = theFoundItem.y - 5
            setItems(itemsCopy)
            console.log(items);
        }
    }
    function down(id) {

        const itemsCopy = [...items];

        const theFoundItem = itemsCopy.find((item) => {
            return item.id == id;
        })

        theFoundItem.y = theFoundItem.y + 5
        setItems(itemsCopy)
        console.log(items);

    }
    function left(id) {
        const itemsCopy = [...items];

        const theFoundItem = itemsCopy.find((item) => {
            return item.id == id;
        })

        theFoundItem.x = theFoundItem.x - 5
        setItems(itemsCopy)
        console.log(items);

    }
    function right(id) {
        const itemsCopy = [...items];

        const theFoundItem = itemsCopy.find((item) => {
            return item.id == id;
        })

        theFoundItem.x = theFoundItem.x + 5
        setItems(itemsCopy)
        console.log(items);
    }

    return (
        <>
            <div className='w-screen h-screen bg-navy relative' >
                {
                    items.map((item) => {

                        return (
                            <div draggable onClick={() => {
                                setSelected(item.id)
                                console.log(selected);
                            }} style={{ top: item.y, left: item.x }} key={item.id} className={`w-8 h-8 bg-candy absolute    `} >
                            </div>
                        );

                    })




                }
                <div className='absolute bottom-0 left-2/4 -translate-x-2/4 '>


                    <button onClick={() => up(selected)} className="bg-candy px-5 py-5 rounded ">
                        Up
                    </button>
                    <button onClick={() => down(selected)} className="bg-candy px-5 py-5 rounded ">
                        Down
                    </button>
                    <button onClick={() => left(selected)} className="bg-candy px-5 py-5 rounded ">
                        Left
                    </button>
                    <button onClick={() => right(selected)} className="bg-candy px-5 py-5 rounded ">
                        Right
                    </button>
                    <button onClick={() => addEle()} className="bg-candy px-5 py-5 rounded ">
                        add
                    </button>
                </div>
            </div>


        </>
    )
}
