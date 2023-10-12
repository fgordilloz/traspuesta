import { useId, useState } from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import { Input } from './components/ui/input'


type graduacionType = {
  esf?: number | null;
  cil?: number | null;
  eje?: number | null;
}

function App() {
  const [gradOD, setGradOD] = useState<graduacionType>()
  const [gradOI, setGradOI] = useState<graduacionType>()


  const [calculoOD, setCalculoOD] = useState<graduacionType>()
  const [calculoOI, setCalculoOI] = useState<graduacionType>()


  const idEsfD = useId()
  const idCilD = useId()
  const idEjeD = useId()
  const idEsfI = useId()
  const idCilI = useId()
  const idEjeI = useId()


  const handleCalc = () => {

    try {
      const eceD = Calcular(gradOD)

      if (!eceD) {
        setCalculoOD({})


      } else {
        setCalculoOD({ esf: eceD.esfera, cil: eceD.cilindro, eje: eceD.eje })

      }
    } catch (error) {

      setCalculoOD({})
    }

    try {
      const eceI = Calcular(gradOI)
      if (!eceI) {
        setCalculoOI({})

      } else {
        setCalculoOI({ esf: eceI.esfera, cil: eceI.cilindro, eje: eceI.eje })
      }

    } catch (error) {
      setCalculoOI({})

    }


  }
  const Calcular = (graduacion: graduacionType) => {
    const { esf, cil, eje } = graduacion
    // console.log({ esf }, { cil }, { eje })
    if (isNaN(+esf) || isNaN(+cil) || isNaN(+eje)) return


    const sf = +esf + +cil;


    const eje_calculado = (+eje + 90) % 180
    // console.log("eje calculado: ", eje_calculado)
    // CILINDRO
    let cil_calculado = 0;
    if (cil < 0) {
      cil_calculado = cil * -1;
    } else if (cil > 0) {
      cil_calculado = cil * -1;
    }
    // console.log({ sf }, { cil_calculado }, { eje_calculado })
    return {
      "esfera": sf.toLocaleString('en', { minimumFractionDigits: 2 }),
      "cilindro": cil_calculado.toLocaleString('en', { minimumFractionDigits: 2 }),
      "eje": eje_calculado.toLocaleString('en', { minimumFractionDigits: 0 })
    }

  }

  return (
    <main className="min-h-screen w-full bg-neutral-300 dark:bg-neutral-800">

      {/* <div className='bg-slate-600 w-full h-screen flex justify-center place-items-center'> */}
      <Header />

      <section className="flex flex-col mx-auto max-w-[640px] rounded-2xl bg-zinc-200 dark:bg-zinc-600 p-8 md:place-content-center md:align-middle gap-y-2">
        <h2 className="font-semibold text-xl pb-3">PRESCIPCIÓN</h2>
        {/* OD */}
        <div className="flex gap-3 relative">
          <div className="absolute bottom-1 text-3xl font-semibold">OD</div>
          <div className="flex flex-col pl-14">
            <label htmlFor={idEsfD} className="etiqueta">Esfera </label>
            {/* <Input placeholder="±0.00" id={idEsfD} value={esfD} className="inputece" type="text" name="esf" autoFocus autoComplete="off" onChange={e => setEsfD(e.target.value)} /> */}
            <Input
              placeholder="±0.00"
              id={idEsfD}
              // value={gradOD?.esf}
              className="inputece"
              type="text"
              name="esf"
              autoFocus
              autoComplete="off"
              onChange={e => setGradOD({ ...gradOD, esf: e.target.value })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor={idCilD} className="etiqueta">Cilindro </label>
            <Input
              placeholder="±0.00"
              id={idCilD}
              // value={gradOD?.cil}
              className="inputece"
              type="text"
              name="cil"
              autoComplete="off"
              onChange={e => setGradOD({ ...gradOD, cil: e.target.value })}
            />

          </div>
          <div className="flex flex-col">
            <label htmlFor={idEjeD} className="etiqueta">Eje </label>
            <Input
              placeholder="0"
              id={idEjeD}
              // value={gradOD?.eje}
              className="inputece"
              type="text"
              name="eje"
              autoComplete="off"
              onChange={e => setGradOD({ ...gradOD, eje: e.target.value })}
            />
          </div>
        </div>
        {/* OI */}
        <div className="flex gap-3 relative">
          <div className="absolute bottom-1 text-3xl font-semibold">OI</div>
          <div className="flex flex-col pl-14">

            <Input
              placeholder="±0.00"
              id={idEsfI}
              // value={gradOI?.esf}
              className="inputece"
              type="text"
              name="esf"
              autoComplete="off"
              onChange={e => setGradOI({ ...gradOI, esf: e.target.value })}
            />
          </div>
          <div className="flex flex-col">

            <Input
              placeholder="±0.00"
              id={idCilI}
              // value={gradOI?.cil}
              className="inputece"
              type="text"
              name="cil"
              autoComplete="off"
              onChange={e => setGradOI({ ...gradOI, cil: e.target.value })}
            />
          </div>
          <div className="flex flex-col">

            <Input
              placeholder="0"
              id={idEjeI}
              // value={gradOI?.eje}
              className="inputece"
              type="text"
              name="eje"
              autoComplete="off"
              onChange={e => setGradOI({ ...gradOI, eje: e.target.value })}
            />
          </div>
        </div>
        {/* TRASPUESTA */}
        <h2 className="font-semibold text-xl pb-3 mt-5">TRASPUESTA</h2>
        <div className="flex gap-4 relative">
          <div className="text-2xl font-semibold w-10 text-center ">OD</div>
          <div className="resultado">{calculoOD?.esf}</div>


          <div className="resultado">{calculoOD?.cil}</div>

          <div className="resultado">{calculoOD?.eje}</div>
        </div>
        <div className="flex gap-4">
          <div className="text-2xl font-semibold w-10 text-center">OI</div>
          <div className="resultado">{calculoOI?.esf}</div>


          <div className="resultado">{calculoOI?.cil}</div>

          <div className="resultado">{calculoOI?.eje}</div>
        </div>

        <Button
          className='mt-10 w-full font-bold text-2xl rounded'
          onClick={handleCalc}
        >Calcular</Button>
      </section>

    </main>
  )
}

export default App
