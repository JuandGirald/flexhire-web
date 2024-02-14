import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProfileState = {
  id?: string;
  name?: string;
  avatarUrl?: string;
  verified: boolean;
  skills: {
    experience: number;
    skill: {
      name: string;
    };
  }[];
  video?: {
    optimizedUrl: string;
    posterUrl: string;
  };
  timeline: {
    title: string;
    place: string;
    description: string;
    dateStart: string;
    dateEnd: string;
    entryType: string;
  }[];
  applications?: {
    totalCount: number;
    data: {
      id: string;
      status: string;
      client: {
        name: string;
      };
      firm: {
        name: string;
      };
      job: {
        title: string;
        hiringManager: {
          name: string;
        };
      };
    }[];
  };
  profile?: {
    intro?: string;
    slug?: string;
    urlBlog?: string;
    urlDribbble?: string;
    urlGithub?: string;
    urlLinkedin?: string;
    industry: {
      name: string;
    };
    rate: {
      formatted: string;
    };
    jobTypes: string[];
    totalExperience: number;
  };
};

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    id: undefined,
    name: undefined,
    avatarUrl: undefined,
    verified: false,
    profile: undefined,
    skills: [],
    video: undefined,
    applications: undefined,
    timeline: [],
  },
  reducers: {
    setProfile(state: ProfileState, action: PayloadAction<any>) {
      state.id = action.payload?.id;
      state.name = action.payload?.name;
      state.avatarUrl = action.payload?.avatarUrl;
      state.verified = action.payload?.verified;
      state.profile = action.payload?.profile;
      state.skills = action.payload?.skills;
      state.video = action.payload?.video;
      state.applications = action.payload?.applications;
      state.timeline = action.payload?.timeline;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
