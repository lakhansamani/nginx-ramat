import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home({ time }) {
  const { data, error } = useSwr('/api/translation', fetcher);

  if (error) return <div>Failed to load translation</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <h3>
      {data.greeting} {time}
    </h3>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // Pass data to the page via props
  return { props: { time: new Date().toString() } };
}
