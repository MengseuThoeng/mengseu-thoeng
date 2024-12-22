import React from 'react';

export function calculateDuration(
  startDate: string,
  showMonths: boolean
): string {
  const start: Date = new Date(startDate);
  const now: Date = new Date();
  const diff: number = now.getTime() - start.getTime();
  const diffDate: Date = new Date(diff);
  const years: number = diffDate.getUTCFullYear() - 1970;
  const months: number = diffDate.getUTCMonth();

  if (years === 1 && months === 0) {
    return '1 year';
  } else if (!showMonths) {
    return `${years} years`;
  } else {
    return `${years} yr ${months} mos`;
  }
}

// Timeline component with display name
const TimelineComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-600">
        {children}
      </div>
    </div>
  );
};
TimelineComponent.displayName = 'Timeline';
export const Timeline = TimelineComponent;

// TimelineEvent component with display name
const TimelineEventComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative flex gap-6 items-start group">
      <div className="flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-blue-900 ring-4 ring-white/10 group-hover:ring-white/20 transition-all" />
      </div>
      <div className="flex-1 space-y-2">{children}</div>
    </div>
  );
};
TimelineEventComponent.displayName = 'TimelineEvent';

// Title component with display name
const TimelineEventTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
    {children}
  </h3>
);
TimelineEventTitle.displayName = 'TimelineEvent.Title';

// Description component with display name
const TimelineEventDescription: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-white/80 rounded-lg p-4 prose prose-sm max-w-none hover:text-white/90 transition-colors">
    {React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        if (child.type === 'ul') {
          return React.cloneElement(child as React.ReactElement, {
            className: 'space-y-3 mt-3 text-white/80'
          });
        }
        if (child.type === 'li') {
          return React.cloneElement(child as React.ReactElement, {
            className: 'flex items-start gap-2 text-white/80 hover:text-white/90'
          });
        }
        if (child.type === 'h4') {
          return React.cloneElement(child as React.ReactElement, {
            className: 'text-sm font-semibold mt-4 mb-2 text-white/90'
          });
        }
        if (child.type === 'p') {
          return React.cloneElement(child as React.ReactElement, {
            className: 'text-white/90'
          });
        }
      }
      return child;
    })}
  </div>
);
TimelineEventDescription.displayName = 'TimelineEvent.Description';

// Compose the TimelineEvent component with its sub-components
export const TimelineEvent = Object.assign(TimelineEventComponent, {
  Title: TimelineEventTitle,
  Description: TimelineEventDescription
});

// Export the CurrentTimeLineExp component
const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent>
        <TimelineEvent.Title>SECTEC Institute | 2020 - 2024</TimelineEvent.Title>
        <TimelineEvent.Description>
          <p>Bachelor of MIS (Management Information Systems).</p>
          <ul>
            <li>Programming: C, C++, Java, C# .Net, Spring Framework</li>
            <li>Database Management: SQL Server, MySQL, Oracle</li>
            <li>Web Development: HTML, CSS, JavaScript, Bootstrap, JQuery</li>
            <li>Core Focus: Management Information Systems principles</li>
          </ul>
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          Center of Science and Technology Advanced Development | 2024
        </TimelineEvent.Title>
        <TimelineEvent.Description>
          <p>Completed Basic and Advanced Software Expert Training Courses.</p>
          <h4>Basic Course (Jan 15 - Aug 01, 2024):</h4>
          <ul>
            <li>Java Fundamentals, OOP concepts, Database Connectivity</li>
            <li>
              Web Development: HTML, CSS3, Bootstrap, Tailwind CSS, React.js, Next.js
            </li>
            <li>Spring Boot, RESTful Web Services, Spring Security, JWT</li>
            <li>Database: PostgreSQL, Advanced SQL, Data Modeling</li>
            <li>Git: Version control and collaboration</li>
            <li>Deployment: Linux fundamentals, NGINX, Docker Compose</li>
          </ul>
          <h4>Advanced Course (Aug 19 2024 - Jan 15 2025):</h4>
          <ul>
            <li>
              Advanced Spring Boot: Microservices, Resiliency Patterns, Kafka, OAuth2
            </li>
            <li>Spring Cloud: Configuration Server, API Gateway</li>
          </ul>
        </TimelineEvent.Description>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>Project Training | 2024</TimelineEvent.Title>
        <TimelineEvent.Description>
          <p>Worked on team projects:</p>
          <ul>
            <li>
              GradesBot: Project analysis, database design, data collection, back-end development
            </li>
            <li>
              CodeAdvisors: Full-stack development, project analysis, data collection, documentation
            </li>
          </ul>
        </TimelineEvent.Description>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;