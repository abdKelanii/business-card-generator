import { ref, get, child, getDatabase } from "firebase/database";

interface Business {
  company: string;
  industry: string;
  jobTitle: string;
  website: string;
}

interface Links {
  facebook: string;
  instagram: string;
  linkedIn: string;
  x: string;
}

interface Personal {
  address: string;
  email: string;
  name: string;
  phone: string;
  username: string;
}

export interface User {
  business: Business;
  links: Links;
  personal: Personal;
}

const fetchUsers = async (): Promise<Record<string, User>> => {
  const db = getDatabase();
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, `users`));

  if (snapshot.exists()) {
    return snapshot.val();
  } else {
    console.log("No data available");
    return {};
  }
};

export default fetchUsers;
