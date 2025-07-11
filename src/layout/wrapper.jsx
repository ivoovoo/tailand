
function Wrapper({ children }) {
  return (
    <div className="max-w-[1200px] 2xl:max-w-[1500px] mx-auto w-full">{children}</div>
  )
}

export default Wrapper