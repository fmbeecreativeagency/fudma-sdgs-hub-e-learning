import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { sdgList } from "@/data/sdgData";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Index = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleStartLearning = (sdgId: number) => {
    if (!user) {
      navigate("/auth");
      return;
    }
    navigate(`/course/${sdgId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌍</span>
            <h1 className="text-xl font-bold text-emerald-800">FUDMA SDGs Hub</h1>
          </div>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground hidden sm:inline">{user.email}</span>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="mr-1 h-4 w-4" /> Sign Out
              </Button>
            </div>
          ) : (
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate("/auth")}>
              Sign In
            </Button>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl">
          Learn the 17 Sustainable<br />Development Goals
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Explore interactive courses on the UN SDGs. Read notes, take quizzes, and earn certificates.
        </p>
        {!user && (
          <Button size="lg" className="mt-8 bg-emerald-600 hover:bg-emerald-700 text-lg px-8" onClick={() => navigate("/auth")}>
            Get Started — Sign Up Free
          </Button>
        )}
      </section>

      {/* SDG Courses Grid */}
      <section className="container mx-auto px-4 pb-20">
        <h3 className="mb-8 text-2xl font-bold text-center">SDG Courses</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sdgList.map((sdg) => (
            <div
              key={sdg.id}
              className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="h-2" style={{ backgroundColor: sdg.color }} />
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg text-xl" style={{ backgroundColor: `${sdg.color}20` }}>
                    {sdg.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    SDG {sdg.id}
                  </span>
                </div>
                <h4 className="font-bold text-lg leading-tight mb-2">{sdg.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{sdg.description}</p>
                <Button
                  className="w-full"
                  style={{ backgroundColor: sdg.color }}
                  onClick={() => handleStartLearning(sdg.id)}
                >
                  {user ? "Start Learning" : "Sign In to Start"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
