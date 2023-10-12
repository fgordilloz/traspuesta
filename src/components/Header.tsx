import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <header className="bg-foregroung bg-opacity-40 text-center py-6 font-bold text-4xl mb-10">
        <ModeToggle />
        <h1>TRASPUESTA DE GRADUACIÓN</h1>
      </header>
  )
}

export default Header