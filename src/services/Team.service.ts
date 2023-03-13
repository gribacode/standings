import axios from "axios";

export const TeamService = {
  async getTeams(): Promise<string[]> {
    const res = await axios.get<string[]>("/api/teams");

    return res.data;
  },
};
