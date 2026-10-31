import { type ReactNode } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import NotFound from '@/pages/not-found';
import Home from '@/pages/home';
import About from '@/pages/about';
import BenefitsArticle from '@/pages/benefits';
import Intent from '@/pages/intent';
import Evidence from '@/pages/evidence';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <RoutedErrorBoundary>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/chi-siamo" component={About} />
          <Route path="/benefici.html" component={BenefitsArticle} />
          <Route path="/sonno" component={Intent} />
          <Route path="/respiro" component={Intent} />
          <Route path="/focus" component={Intent} />
          <Route path="/ricerca-meditazione-guidata" component={Evidence} />
          <Route component={NotFound} />
        </Switch>
      </RoutedErrorBoundary>
    </WouterRouter>
  );
}

export default App;
