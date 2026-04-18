import { FormEvent, useState } from "react";

interface SettingsModalProps {
  onClose: () => void;
}

const SettingsModal = ({ onClose }: SettingsModalProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");

  const [notifyPlatform, setNotifyPlatform] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState(false);
  const [notifySocial, setNotifySocial] = useState(false);
  const [notifyContent, setNotifyContent] = useState(false);
  const [notifyEvents, setNotifyEvents] = useState(false);
  const [notifyReminder, setNotifyReminder] = useState(false);

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    console.log("Зачувано!");
    onClose();
  };

  return (
    <>
      <div className="modalOverlay" onClick={onClose}></div>

      <div className="settingsModal">
        <div className="settingsModalHeader">
          <h2>Поставки</h2>
          <button onClick={onClose} className="settingsModalCloseBtn">✕</button>
        </div>

        <form onSubmit={handleSave} className="settingsModalForm">
         {/* Left */}
          <div className="settingsModalLeft">
            <div className="settingsModalRow">
              <div className="settingsModalInputDiv">
                <label>Име</label>
                <input
                  type="text"
                  placeholder="Валентина"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="settingsModalInputDiv">
                <label>Презиме</label>
                <input
                  type="text"
                  placeholder="Стојанова"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="settingsModalInputDiv">
              <label>Е-маил</label>
              <input
                type="email"
                placeholder="vstojanova@hotmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="settingsModalInputDiv">
              <label>Лозинка</label>
              <input
                type="password"
                placeholder="Промени Лозинка"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="settingsModalInputDiv">
              <label>Професија</label>
              <select
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="settingsModalSelect"
              >
                <option value="">HR Регрутер</option>
                <option value="hr-manager">HR Менаџер</option>
                <option value="hr-director">HR Директор</option>
                <option value="recruiter">Регрутер</option>
                <option value="other">Друго</option>
              </select>
            </div>
          </div>
          {/* Right */}
          <div className="settingsModalRight">
            <div className="settingsModalCheckboxGroup">
              <p>Добивај нотификации на:</p>
              <label>
                <input type="checkbox" checked={notifyPlatform} onChange={(e) => setNotifyPlatform(e.target.checked)} />
                Платформа
              </label>
              <label>
                <input type="checkbox" checked={notifyEmail} onChange={(e) => setNotifyEmail(e.target.checked)} />
                Е-маил
              </label>
              <label>
                <input type="checkbox" checked={notifySocial} onChange={(e) => setNotifySocial(e.target.checked)} />
                Социјални медиуми
              </label>
            </div>
            <div className="settingsModalCheckboxGroup">
              <p>Добивај нотификации за:</p>
              <label>
                <input type="checkbox" checked={notifyContent} onChange={(e) => setNotifyContent(e.target.checked)} />
                Нови содржини
              </label>
              <label>
                <input type="checkbox" checked={notifyEvents} onChange={(e) => setNotifyEvents(e.target.checked)} />
                Нови настани
              </label>
              <label>
                <input type="checkbox" checked={notifyReminder} onChange={(e) => setNotifyReminder(e.target.checked)} />
                Приближување на датум за настан
              </label>
            </div>
          </div>
          <div className="settingsModalSaveDiv">
            <button type="submit" className="primaryButton settingsModalSaveBtn">
              Зачувај
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SettingsModal;