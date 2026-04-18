import Image from "next/image";
import { useState } from "react";
import { badges, connections, purchasedTickets } from "@/data/dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const UserDashboardMain = () => {
  const [feedback, setFeedback] = useState("");
  const [search, setSearch] = useState("");

  const filteredConnections = connections.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="userDashboardMainSection">
      <div className="userDashboardMainContainer wrapper">
        {/* Left */}
        <div className="dashboardLeft">
          <div className="dashboardCard pointsCard">
            <p className="dashboardCardTitle">Поени до следна рамка</p>
            <div className="badgesDiv">
              <div className="badgeItem badgeItemSilver">
                {" "}
                <div className="badgeItemInner badgeItemSilver">50</div>{" "}
              </div>
              <div className="badgeItem badgeItemGold">
                {" "}
                <div className="badgeItemInner badgeItemGold">50</div>{" "}
              </div>
              <div className="badgeItem badgeItemBronze">
                {" "}
                <div className="badgeItemInner badgeItemBronze">50</div>{" "}
              </div>
            </div>
          </div>
          <div className="dashboardCard badgesCard">
            <div className="dashboardCardHeading">
              <p className="dashboardCardTitle">Најнови беџови</p>
              <button className="dashboardSeeAllBtn">Види ги сите</button>
            </div>
            <div className="latestBadgesList">
              {badges.map((badge) => (
                <div key={badge.id} className="latestBadgeItem">
                  <div className="latestBadgeImage"></div>
                  <p>
                    Левел 3 беџ за активност во <b>блог</b> секцијата за
                    корисници.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="dashboardCard connectionsCard">
            <div className="dashboardCardHeading">
              <p className="dashboardCardTitle">Листа на конекции</p>
            </div>
            <div className="connectionsSearchDiv">
              <label htmlFor="connection">Додади конекција</label>
              <input
                id="connection"
                type="text"
                placeholder="Додади конекција"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="connectionsSearch"
              />
            </div>
            <div className="dashboardSubtitleAndButtonDiv">
              <p className="dashboardCardSubtitle">Последно додадени:</p>
              <button className="dashboardSeeAllBtn">Види ги сите</button>
            </div>
            <div className="connectionsList">
              {filteredConnections.map((connection) => (
                <div key={connection.id} className="connectionItem">
                  <div className="connectionImgDiv">
                    <Image
                      src={connection.image}
                      alt={connection.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <p>{connection.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="dashboardRight">
          <div className="dashboardCard ticketsCard">
            <div className="dashboardCardHeading">
              <h2 className="dashboardCardTitle">Купени карти</h2>
            </div>
            <div className="ticketsList">
              {purchasedTickets.map((ticket) => (
                <div key={ticket.id} className="ticketItem">
                  <div className="ticketImgDiv">
                    <Image
                      src={ticket.image}
                      alt={ticket.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="ticketInfo">
                    <h4 className="ticketTitle">{ticket.title}</h4>
                    <p className="ticketDate">{ticket.date}</p>
                    <p className="ticketLocation">{ticket.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="dashboardCard discountCard">
            <div className="discountItem">
              <p className="discountLabel">Освоено:</p>
              <p className="discountNumber">20%</p>
              <p className="discountLabel">попуст за следна карта</p>
            </div>
            <div className="discountDivider"></div>
            <div className="discountItem">
              <p className="discountLabel">Препорачано на:</p>
              <p className="discountNumber">20</p>
              <p className="discountLabel">пријатели</p>
            </div>
          </div>
          <div className="dashboardCard feedbackCard">
            <textarea
              placeholder="Остави feedback за страната..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="feedbackTextarea"
            />
            <div className="feedbackActions">
              <button className="feedbackAttachBtn">
                <FontAwesomeIcon icon={faLink} />
              </button>
              <button className="primaryButton feedbackSubmitBtn">
                Испрати
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardMain;
