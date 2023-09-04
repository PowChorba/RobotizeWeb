import { DolarModel } from "@/type"

interface Props {
    dataDolar: DolarModel[]
}

export default function BigDolar({dataDolar}: Props){
    return(<article className="grid grid-cols-4 text-center gap-8 border-2 py-4 max-sm:grid-cols-2">
        <div>
            <h4 className="font-bold text-[#441eae]">Dólar {dataDolar[0].name}</h4>
            <div className="grid grid-cols-2">
                <span className="text-xs text-[#5a5a5a]">Compra</span>
                <span className='text-xs text-[#5a5a5a]'>Venta</span>
                <span className="font-bold">${dataDolar[0].buy}</span>
                <span className="font-bold">${dataDolar[0].sell}</span>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-[#441eae]">Dólar {dataDolar[1].name}</h4>
            <div className="grid grid-cols-2">
                <span className="text-xs text-[#5a5a5a]">Compra</span>
                <span className='text-xs text-[#5a5a5a]'>Venta</span>
                <span className="font-bold">${dataDolar[1].buy}</span>
                <span className="font-bold">${dataDolar[1].sell}</span>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-[#441eae]">Dólar {dataDolar[2].name}</h4>
            <div className="grid grid-cols-1">
                <span className='text-xs text-[#5a5a5a]'>Venta</span>
                <span className="font-bold">${dataDolar[2].sell}</span>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-[#441eae]">Dólar {dataDolar[3].name}</h4>
            <div className="grid grid-cols-1">
                <span className='text-xs text-[#5a5a5a]'>Venta</span>
                <span className="font-bold">${dataDolar[3].sell}</span>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-[#441eae]">Dólar {dataDolar[4].name}</h4>
            <div className="grid grid-cols-1">
                <span className='text-xs text-[#5a5a5a]'>Venta</span>
                <span className="font-bold">${dataDolar[4].sell}</span>
            </div>
        </div>
        <div>
            <h4 className="font-bold text-[#441eae]">Dólar {dataDolar[5].name}</h4>
            <div className="grid grid-cols-1">
                <span className='text-xs text-[#5a5a5a]'>Venta</span>
                <span className="font-bold">${dataDolar[5].sell}</span>
            </div>
        </div>
        {/* <div>
            <h4 className="font-bold text-[#441eae]">Dólar {dataDolar[6].name}</h4>
            <div className="grid grid-cols-1">
                <span className='text-xs text-[#5a5a5a]'>Venta</span>
                <span className="font-bold">${dataDolar[6].sell}</span>
            </div>
        </div> */}
        <div>
            <h4 className="font-bold text-[#441eae]">Euro</h4>
            <div className="grid grid-cols-2">
                <span className="text-xs text-[#5a5a5a]">Compra</span>
                <span className='text-xs text-[#5a5a5a]'>Venta</span>
                <span className="font-bold">$378,59</span>
                <span className="font-bold">$399,33</span>
            </div>
        </div>
    </article>)
}