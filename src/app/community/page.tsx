"use client";

import React, { useState } from 'react';
import { Heart, MessageSquare, Share2, Plus, Users, Award, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { communityPosts } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';
import { LiquidGlassCard } from '@/components/ui/liquid-glass-card';
import { MagneticHover } from '@/components/ui/magnetic-hover';

export default function CommunityHubPage() {
  const [posts, setPosts] = useState(communityPosts);
  const [newPostContent, setNewPostContent] = useState("");

  const handleLike = (id: string) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: `post-${Date.now()}`,
      user: "Current_User", // Simulation
      content: newPostContent,
      timestamp: "Just now",
      likes: 0,
      isMember: true
    };

    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Hub Header */}
        <section className="mb-20 text-center">
          <FadeIn direction="down">
            <h1 className="text-5xl md:text-8xl font-bold font-headline tracking-tighter text-white mb-6">
              Fan <span className="text-gradient">Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-medium">
              The beating heart of Kolkata's Barca family. Share your passion, connect with fellow culers, and stay in the buzz.
            </p>
          </FadeIn>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar: Community Stats */}
          <aside className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <FadeIn direction="right" delay={0.2}>
              <LiquidGlassCard className="p-6 border-white/5 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-white font-bold mb-4">
                    <TrendingUp className="h-5 w-5 text-primary" /> Trending Now
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">#ElClasicoKolkata</p>
                    <p className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">#YamalMagic</p>
                    <p className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer">#CulersForChange</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-white font-bold mb-4">
                    <Award className="h-5 w-5 text-yellow-400" /> Top Contributors
                  </div>
                  <div className="space-y-4">
                    {["Sayan_Culer", "Anjali_Barca", "Rahul10"].map((user, i) => (
                      <div key={user} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold text-white border border-white/10">
                          {i + 1}
                        </div>
                        <span className="text-sm text-white/80">{user}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </LiquidGlassCard>
            </FadeIn>
          </aside>

          {/* Center Column: Feed */}
          <main className="lg:col-span-6 space-y-8 order-1 lg:order-2">
            
            {/* Post Creator */}
            <FadeIn direction="up">
              <LiquidGlassCard className="p-6 border-primary/20 bg-primary/5">
                <form onSubmit={handleSubmitPost} className="space-y-4">
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="What's on your mind, Culer?"
                    className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all resize-none h-24"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold px-2">Official Penya Wall</p>
                    <MagneticHover strength={10}>
                      <Button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 h-10 shadow-lg shadow-primary/20">
                        Post to Hub
                      </Button>
                    </MagneticHover>
                  </div>
                </form>
              </LiquidGlassCard>
            </FadeIn>

            {/* Posts Feed */}
            <div className="space-y-6">
              <AnimatePresence mode="popLayout">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <LiquidGlassCard className="p-6 border-white/5 hover:border-white/10 transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center font-bold text-white border border-white/10 shadow-inner">
                            {post.user[0]}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-bold">{post.user}</span>
                              {post.isMember && (
                                <span className="bg-primary/20 text-primary text-[8px] font-bold px-1.5 py-0.5 rounded uppercase tracking-tighter">Member</span>
                              )}
                            </div>
                            <span className="text-xs text-white/30">{post.timestamp}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="text-white/20 hover:text-white rounded-full">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-foreground/80 leading-relaxed mb-6">
                        {post.content}
                      </p>
                      
                      <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                        <button 
                          onClick={() => handleLike(post.id)}
                          className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-accent transition-colors group"
                        >
                          <Heart className={post.likes > 24 ? "h-4 w-4 fill-accent text-accent" : "h-4 w-4 group-hover:scale-125 transition-transform"} />
                          {post.likes}
                        </button>
                        <button className="flex items-center gap-2 text-xs font-bold text-white/40 hover:text-primary transition-colors group">
                          <MessageSquare className="h-4 w-4 group-hover:scale-125 transition-transform" />
                          Reply
                        </button>
                      </div>
                    </LiquidGlassCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </main>

          {/* Right Sidebar: Supporters Activity */}
          <aside className="lg:col-span-3 space-y-6 order-3">
            <FadeIn direction="left" delay={0.4}>
              <LiquidGlassCard className="p-6 border-white/5 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Grow the Family</h3>
                <p className="text-sm text-foreground/50 mb-6">Invite your culer friends to join Kolkata's only official penya.</p>
                <Button className="w-full bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 h-11">
                  Invite Friends
                </Button>
              </LiquidGlassCard>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.6}>
              <div className="p-6 bg-gradient-to-br from-[#004C99]/20 to-[#A50044]/20 rounded-3xl border border-white/5">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Live Now
                </h4>
                <p className="text-xs text-white/60 leading-relaxed font-medium">
                  24 Culers are currently online discussing the match lineup.
                </p>
              </div>
            </FadeIn>
          </aside>

        </div>
      </div>
    </div>
  );
}
