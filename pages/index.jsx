const Page = () => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 7, textAlign: 'center', marginTop: '7rem' }}>
        This is an awesome note taking app 🤩!
      </h1>
    </div>
  </div>
)

export default Page
