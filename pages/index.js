export default function Home({ time }) {
  return <h3>Hello world {time}</h3>;
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // Pass data to the page via props
  return { props: { time: new Date().toString() } };
}
