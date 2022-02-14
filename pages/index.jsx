const Page = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 8, textAlign: 'center' }}>
        This is an awesome note taking app 🤩!
      </h1>
    </div>
  </div>
)

export default Page
