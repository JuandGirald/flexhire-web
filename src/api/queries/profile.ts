export const GET_PROFILE_DATA = `query {
    currentUser {
        id
        name
        avatarUrl
        verified
        video {
            optimizedUrl
            posterUrl
        }
        skills {
            experience
            skill {
              name
            }
        }
        profile {
          intro
          slug
          urlBlog
          urlDribbble
          urlGithub
          urlLinkedin
          industry {
            name
          }
          rate {
            formatted
          }
          jobTypes
          totalExperience
        }
        timeline {
          title
          place
          description
          dateStart
          dateEnd
          entryType
        }
        applications {
            totalCount
            data {
              node {
                status
                client {
                  name
                }
                firm {
                  name
                }
                job {
                  title
                  hiringManager {
                    name
                  }
                }
              }
            }
          }
    }
  }`;
