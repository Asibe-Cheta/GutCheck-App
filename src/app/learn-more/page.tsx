import { Metadata } from 'next'
import { AlertTriangle, Heart, Shield, Brain, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Learn More About GutChecks: How It Works & Why It Matters',
  description: 'Discover how GutChecks helps users recognise manipulation, red flags, and toxic behaviour across all interactions, safely and anonymously.',
}

const LearnMore = () => {
  const problemPoints = [
    {
      number: '1',
      title: 'The Intuition Gap',
      description: 'A gut feeling that "something is off" is often the first and only warning sign. But without validation or evidence, they are pressured to dismiss their feelings, leading to self-doubt and vulnerability.'
    },
    {
      number: '2',
      title: 'The Isolation Effect',
      description: 'Perpetrators of manipulation intentionally isolate their targets and make them question their reality (gaslighting). Victims, believing they are alone or at fault, withdraw from their support networks, making the situation worse.'
    },
    {
      number: '3',
      title: 'The Expertise Barrier',
      description: 'It is unreasonable to expect every young person to be a trained psychologist. They cannot be expected to instantly recognize sophisticated tactics like love-bombing, negging, or triangulation when they encounter them.'
    },
    {
      number: '4',
      title: 'The Digital Real World Blur',
      description: 'Harmful behaviours are no longer confined to a single platform. A toxic dynamic can start on a game console, move to Instagram DMs, and manifest in person at school or work, making it difficult to see the full pattern.'
    },
    {
      number: '5',
      title: 'The Action Paralysis',
      description: 'Even when a red flag is identified, the question of "What do I do now?" can be paralysing due to fear, embarrassment, or a simple lack of knowing what to say or who to turn to.'
    }
  ]

  return (
    <div className="min-h-screen pt-32 flex flex-col items-center">
      {/* Hero Section */}
      <section className="page-section w-full bg-gradient-to-b from-primary-dark to-secondary-dark flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary">
                How GutChecks Works &amp; Why It Matters
              </h1>
              <div className="glass-card p-8 rounded-xl border-warning-coral/30 border-2">
                <div className="flex flex-col items-center gap-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-warning-coral" />
                  <div>
                    <h3 className="text-lg font-bold text-warning-coral mb-4">Important: GutChecks is a helpful tool, not a replacement for professional help.</h3>
                    <p className="text-text-secondary leading-relaxed">
                      It highlights possible warning signs aligned with known manipulation tactics. Final judgement always rests with the user and, where appropriate, real-world professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Core Problem */}
      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center space-y-8 mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary">
                The Core Problem
              </h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                <p className="text-xl text-text-secondary leading-relaxed">
                  Users today are navigating a social landscape more complex than any previous generation. Manipulation, toxic behaviour, grooming, and radicalisation happen in places parents, teachers, and friends cannot always see; DMs, group chats, online games, dating apps, and in person.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  This lack of clarity allows damaging behaviours like emotional manipulation, coercion, and grooming to go 
                  unrecognised and unchallenged, causing profound psychological harm and putting them in real danger (mentally and or physically).
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-12 max-w-4xl mx-auto">
            {problemPoints.map((point, index) => (
              <FadeIn key={point.number} direction="up" delay={index * 0.1}>
                <Card variant="glass" hover className="p-10">
                  <div className="flex flex-col items-center text-center gap-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center font-black text-3xl text-white">
                      {point.number}
                    </div>
                    <div className="max-w-2xl space-y-3">
                      <h3 className="text-xl font-bold text-text-primary">
                        {point.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* In Essence */}
      <section className="page-section w-full bg-gradient-to-b from-transparent to-primary-dark/30 flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <Card variant="glass" className="p-12">
              <div className="text-center space-y-10">
                <div className="flex items-center justify-center gap-3">
                  <Brain className="w-8 h-8 text-accent-teal" />
                  <h2 className="text-2xl font-black text-text-primary">
                    In Essence
                  </h2>
                </div>
                <div className="space-y-6 max-w-3xl mx-auto">
                  <p className="text-lg text-text-secondary leading-relaxed">
                    The problem is not a lack of danger; it&apos;s a lack of clarity. Users are navigating a sea of interactions without a compass to identify the threatening currents. The digital world offers huge opportunities; it also hides real risks behind every screen.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    In the past year alone, there have been heartbreaking stories. A 15-year-old boy in the US who thought he was chatting with another teenager was extorted for money after sharing private images. A teenage girl in Europe was manipulated by peers in a group chat until bullying drove her offline for months.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed font-semibold">
                    Manipulation, toxic friendships, online grooming, sextortion, and bullying are not rare exceptions anymore. They are patterns; patterns that users cannot always recognise until it is too late.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* The Turning Point */}
      <section className="page-section w-full flex justify-center">
        <div className="w-full max-w-4xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary">
                The Turning Point: GutChecks
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-12 mb-20 max-w-4xl mx-auto">
            <FadeIn direction="up">
              <Card variant="glass" className="p-10">
                <div className="text-center space-y-8">
                  <div className="w-14 h-14 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Empowerment, Not Surveillance
                  </h3>
                  <div className="space-y-4 max-w-2xl mx-auto">
                    <p className="text-text-secondary leading-relaxed">
                      This is why GutChecks was built. An app designed to give users the ability to see warning signs before they are trapped, and the confidence to reach out before silence wins.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      GutChecks is not parental surveillance. It is <strong className="text-accent-teal">empowerment</strong>. Through interactive red flag awareness, the app teaches users how to recognise manipulation tactics; from the friendly stranger who overshares too soon, to the pressure disguised as a dare, to the online &quot;friend&quot;
                      asking them to keep secrets.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>

            <FadeIn direction="up" delay={0.1}>
              <Card variant="glass" className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-green to-accent-teal rounded-xl flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Direct Support & Guidance
                  </h3>
                  <div className="space-y-4 max-w-2xl mx-auto">
                    <p className="text-text-secondary leading-relaxed">
                      Beyond awareness, GC provides direct support: anonymous analysis, quick access to crisis help lines, and smart, 
                      scenario based link between spotting toxic behaviour and knowing how to respond.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      It bridges the gap between a user&apos;s innate intuition and the expert knowledge needed to validate it and take action.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>

          <FadeIn direction="up">
            <Card variant="glass" className="p-10 border-accent-teal/30 border-2">
              <div className="text-center space-y-8">
                <Target className="w-10 h-10 text-accent-teal mx-auto" />
                <div className="space-y-6 max-w-3xl mx-auto">
                  <h3 className="text-xl font-bold text-text-primary">
                    Our goal is simple
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed font-semibold">
                    GutChecks exists to educate and empower users to recognise what grooming, manipulation, and toxic behaviour actually looks like, even when disguised as friendship, love, or opportunity, and guide them to safer next steps.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    GutChecks is designed to educate and empower; never to replace human judgement or professional help.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-section w-full bg-gradient-to-b from-primary-dark/30 to-transparent flex justify-center">
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-12">
          <FadeIn direction="up">
            <div className="glass-card p-12 rounded-2xl">
              <div className="text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-black text-text-primary">
                  Ready to trust your instincts?
                </h2>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                  GutChecks helps users recognise manipulation, red flags, and toxic behaviour, even when disguised as friendship, love, or opportunity, and guides them to safer next steps.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Experience the app for free
                  </a>
                  <a 
                    href="/pricing" 
                    className="btn-secondary"
                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default LearnMore
