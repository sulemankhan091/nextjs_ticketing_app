import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Failed to fetch tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();

  const uniqueCategories = [...new Set(tickets?.map(({ category }) => category))];
  
  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories.map((uniquecategory, categoryindex) => (
            <div key={categoryindex} className="mb-4">
              <h2>{uniquecategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniquecategory)
                  .map((filteredticket, _index) => (
                    <TicketCard id={_index} key={_index} ticket={filteredticket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
