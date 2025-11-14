import { Metadata } from 'next'
import { AlertTriangle, Heart, Shield, Brain, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import FadeIn from '@/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Learn More About GutCheck - Visualize Your Intuition',
  description: 'Discover how GutCheck helps kids and young adults navigate relationships safely with AI-powered emotional intelligence.',
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
      title: 'The Digital-Real World Blur',
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
                GutCheck (GC):{' '}
                <span className="bg-gradient-to-r from-accent-teal to-accent-green bg-clip-text text-transparent">
                  Visualize Your Intuition
                </span>
              </h1>
              <div className="glass-card p-8 rounded-xl border-warning-coral/30 border-2">
                <div className="flex flex-col items-center gap-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-warning-coral" />
                  <div>
                    <h3 className="text-lg font-bold text-warning-coral mb-4">Disclaimer: The app is an Assistant, Not an Authority</h3>
                    <p className="text-text-secondary leading-relaxed">
                      The app is a guide that highlights several warning signs that align with known manipulation or perpetratory tactics. 
                      The final judgment will always lie with the user and/or real-world experts.
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
                  Kids and young adults are navigating a social landscape of unprecedented complexity, but are often equipped 
                  with little more than their intuition to identify manipulation and harm. The line between healthy and unhealthy 
                  dynamics is often blurred, leaving them feeling confused, isolated, and doubting their judgment.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  This lack of clarity allows damaging behaviours—like emotional manipulation, coercion, and grooming—to go 
                  unrecognised and unchallenged, causing profound psychological harm and putting them in real danger (mentally and/or physically).
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="space-y-10 max-w-3xl mx-auto">
            {problemPoints.map((point, index) => (
              <FadeIn key={point.number} direction="up" delay={index * 0.1}>
                <Card variant="glass" hover className="p-8">
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center font-black text-2xl text-white">
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
            <Card variant="glass" className="p-10">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center gap-3">
                  <Brain className="w-8 h-8 text-accent-teal" />
                  <h2 className="text-2xl font-black text-text-primary">
                    In Essence
                  </h2>
                </div>
                <div className="space-y-6 max-w-3xl mx-auto">
                  <p className="text-lg text-text-secondary leading-relaxed">
                    The problem is not a lack of danger; it&apos;s a lack of clarity. Kids and young adults are swimming in a sea 
                    of social interactions without a compass to identify threatening currents. The digital world in particular has 
                    given limitless opportunities, but also behind every screen lurks a risk.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    In the past year alone, there&apos;ve been heartbreaking stories… a 15 year old boy in the U.S. who thought he was 
                    chatting with another teenager, only to be extorted for money after sharing private images. A teenage girl in 
                    Europe manipulated by peers in a group chat until bullying drove her offline for months. Stories like these do 
                    not live in faraway headlines—they live in the anxiety in every parent&apos;s heart.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed font-semibold">
                    Manipulation, toxic friendships, online grooming, sextortion, bullying— they&apos;re not rare exceptions any more. 
                    They are patterns… patterns that cannot always recognize until it&apos;s too late.
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary">
                The Turning Point: GutCheck (GC)
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-10 mb-16 max-w-3xl mx-auto">
            <FadeIn direction="up">
              <Card variant="glass" className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-teal to-accent-green rounded-xl flex items-center justify-center mx-auto">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">
                    Empowerment, Not Surveillance
                  </h3>
                  <div className="space-y-4 max-w-2xl mx-auto">
                    <p className="text-text-secondary leading-relaxed">
                      This is why GC was created —an app built to give kids and young adults eyes to see the warning signs before 
                      they&apos;re trapped, and a voice to reach out before silence wins.
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      GC is not parental surveillance. It is <strong className="text-accent-teal">Empowerment</strong>. The app teaches 
                      kids and young adults, through interactive red flag awareness, how to recognize manipulation tactics—from the 
                      friendly stranger who overshares too soon, to the pressure disguised as a dare, to the online &apos;friend&apos; 
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
                    This is not just technology—it&apos;s transformation
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    From isolated vulnerability to confident resilience. From silent suffering to proactive prevention.
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed font-semibold">
                    GC&apos;s vision is that every user knows exactly what manipulation, blackmail, bullying, sexual exploitation/abuse, 
                    grooming looks like, even when it&apos;s disguised as love, friendship, or opportunity. Because safety should not 
                    be optional—it should be automatic.
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
                  Ready to Transform Your Safety?
                </h2>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                  Join thousands of young adults who are learning to trust their instincts and build healthier relationships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a 
                    href="https://apps.apple.com/gb/app/gutcheck-app/id6754253217" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-accent-teal to-accent-green text-white px-8 py-4 rounded-xl font-semibold hover:from-accent-green hover:to-accent-teal transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Download Now
                  </a>
                  <a 
                    href="/pricing" 
                    className="border-2 border-accent-teal text-accent-teal px-8 py-4 rounded-xl font-semibold hover:bg-accent-teal hover:text-white transition-all duration-300"
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
