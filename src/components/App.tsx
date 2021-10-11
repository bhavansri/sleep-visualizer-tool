import { Listbox, Tab } from '@headlessui/react';
import { HiCheck } from 'react-icons/hi';
import { TiArrowSortedDown } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import { IntervalData } from '../models/IntervalData';
import getUserData from '../services/getUserData';
import IntervalSummary from './IntervalSummary';

function App() {
  const [index, setIndex] = useState(0);
  const [userData, setUserData] = useState<IntervalData[][]>([[]]);

  const fetchData = async () => {
    const intervalsData = await getUserData();

    console.log(intervalsData);
    setUserData(intervalsData);
  }

  useEffect(() => {
    fetchData();
  }, [userData.length]);
  
  const selectedUser = userData[index];
  
  return (
    <div className="flex items-center justify-center">
    <div>
        <Listbox value={index} onChange={setIndex}>
          <div className="m-2 px-2 flex items-center">
            <Listbox.Label>Select User:</Listbox.Label>
            <Listbox.Button className="m-2 px-2 flex items-center gap-x-2 rounded border-solid border border-black">
              User {index + 1} <TiArrowSortedDown/>
            </Listbox.Button>
          </div>
          <Listbox.Options>
            {userData.map((user, index) => (
              <Listbox.Option key={index} value={index}>
                {({ active, selected }) => (
              <>
              <li
                className={`${
                  active ? 'bg-green-500 text-white' : 
                  'bg-white text-black'
                }`}
              >
                <span className={"flex items-center px-2 gap-x-1"}>{selected && <HiCheck />} User {index + 1}</span>
              </li>
              </>
            )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
    <Tab.Group>
      <Tab.List className="mx-2 my-4">
      {
        selectedUser.map(function(interval, i) {
          return <Tab
          key={interval.id}
          className={({ selected }) =>
            selected ? 'bg-green-500 text-white rounded border-solid border-1 border-black' : 
            'bg-white text-black rounded border-solid border-1 border-black'
          }
        >
          <div className="mx-2 px-2">
            Interval #{i+1}
          </div>
        </Tab>
        })
      }
      </Tab.List>
      <Tab.Panels>
        {
          selectedUser.map(function(interval) {
            return <Tab.Panel><IntervalSummary interval={interval}/></Tab.Panel>
          })
        }
      </Tab.Panels>
    </Tab.Group>
    </div>
    </div>
  );
}

export default App;
