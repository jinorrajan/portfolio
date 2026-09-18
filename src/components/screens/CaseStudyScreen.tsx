import { useState } from 'react';
import { NavTab } from '../../types';
import { PROJECTS } from '../../data/portfolioData';
import { ArrowLeft, Play, RefreshCw, CheckCircle2, Cpu, Activity, ShieldCheck, Database, Zap } from 'lucide-react';

interface CaseStudyScreenProps {
  onNavigate: (tab: NavTab) => void;
}

export default function CaseStudyScreen({ onNavigate }: CaseStudyScreenProps) {
  const caseStudy = PROJECTS[0]; // Food Delivery Platform

  // Interactive Concurrency Simulator State
  const [simulating, setSimulating] = useState(false);
  const [simCount, setSimCount] = useState(1);
  const [metrics, setMetrics] = useState({
    activeCouriers: 148,
    ordersInFlight: 842,
    avgPickupLatency: '11.4 min',
    redisDispatchMs: '3.8 ms',
    geoMatchRate: '98.9%',
  });

  const runSimulation = () => {
    setSimulating(true);
    setTimeout(() => {
      setSimCount((prev) => prev + 1);
      setMetrics({
        activeCouriers: 180 + Math.floor(Math.random() * 40),
        ordersInFlight: 1200 + Math.floor(Math.random() * 300),
        avgPickupLatency: (10.5 + Math.random() * 1.2).toFixed(1) + ' min',
        redisDispatchMs: (3.1 + Math.random() * 1.5).toFixed(1) + ' ms',
        geoMatchRate: (98.2 + Math.random() * 1.4).toFixed(1) + '%',
      });
      setSimulating(false);
    }, 900);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="max-w-[1240px] w-full mx-auto px-4 lg:px-10 py-6 lg:py-10 flex flex-col gap-10">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between border-b-2 border-black pb-3">
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 font-headline-sm text-[14px] font-bold text-black hover:text-[#6a5f00] cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>
          <div className="font-label-code text-[12px] text-[#444748] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>~/ecosystem/food-delivery-engine</span>
          </div>
        </div>

        {/* Lead Title Dossier Banner */}
        <section className="relative bg-white border-2 border-black p-6 sm:p-10 shadow-[6px_6px_0px_#000000]">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 bg-[#fae100] border border-black font-label-badge text-[11px] font-bold text-[#201c00]">
              CASE STUDY 01
            </span>
            <span className="px-2.5 py-0.5 bg-[#efeee9] border border-black font-label-badge text-[11px] font-bold">
              ROLE: PRODUCT ENGINEER
            </span>
            <span className="px-2.5 py-0.5 bg-[#a7f3d0] border border-black font-label-badge text-[11px] font-bold text-black">
              ✨ 4 COMMERCE APPS SHIPPED
            </span>
          </div>

          <h1 className="font-headline-lg text-[32px] sm:text-[44px] font-bold text-black leading-tight">
            Food Delivery Platform Ecosystem
          </h1>
          <p className="font-body-lg text-[18px] text-[#444748] mt-2 leading-relaxed max-w-3xl">
            Architecting a high-throughput, multi-tier on-demand food logistics engine with real-time geofenced courier dispatch, sub-second POS synchronization, and resilient mobile state machines.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t-2 border-black">
            <div className="p-3 bg-[#f5f4ef] border border-black text-center shadow-[2px_2px_0px_#000000]">
              <div className="font-display-xl text-[26px] font-bold text-black">-24%</div>
              <div className="font-label-badge text-[10px] text-[#444748] uppercase">Pickup Latency</div>
            </div>
            <div className="p-3 bg-[#f5f4ef] border border-black text-center shadow-[2px_2px_0px_#000000]">
              <div className="font-display-xl text-[26px] font-bold text-black">99.98%</div>
              <div className="font-label-badge text-[10px] text-[#444748] uppercase">Socket Uptime</div>
            </div>
            <div className="p-3 bg-[#f5f4ef] border border-black text-center shadow-[2px_2px_0px_#000000]">
              <div className="font-display-xl text-[26px] font-bold text-black">15,000+</div>
              <div className="font-label-badge text-[10px] text-[#444748] uppercase">Peak Orders / Day</div>
            </div>
            <div className="p-3 bg-[#fae100] border border-black text-center shadow-[2px_2px_0px_#000000]">
              <div className="font-display-xl text-[26px] font-bold text-[#201c00]">4 Apps</div>
              <div className="font-label-badge text-[10px] text-[#201c00] uppercase font-bold">1 Codebase Archetype</div>
            </div>
          </div>
        </section>

        {/* Section 1: The Bottleneck & Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: The Challenge */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <h2 className="font-headline-sm text-[18px] font-bold text-black uppercase">
                  The Critical Bottleneck: Concurrency Collision
                </h2>
              </div>
              <p className="font-body-md text-[#444748] leading-relaxed">
                During peak lunch hours (12:00 PM – 2:00 PM), naive HTTP polling models caused severe database locking on order state tables. Couriers experienced race conditions where multiple riders accepted the same order within 300 milliseconds.
              </p>
              <div className="p-3 bg-[#efeee9] border border-black font-label-code text-[12px] text-red-700">
                [FAULT_AUDIT]: Postgres CPU spiked to 88% • Polling frequency overwhelmed connection pool • Average driver idle wait: 14.8 minutes.
              </div>
            </div>

            <div className="p-6 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                <h2 className="font-headline-sm text-[18px] font-bold text-black uppercase">
                  The Engineering Solution: Smart Geofenced Dispatch
                </h2>
              </div>
              <p className="font-body-md text-[#444748] leading-relaxed">
                I re-architected the dispatch logic around a high-performance Go event daemon paired with Redis geospatial indexing (<code className="bg-[#efeee9] px-1 font-bold">GEOSEARCH</code>) and atomic Lua scripts.
              </p>
              <ul className="space-y-2 font-body-sm text-[13px] text-[#1b1c19]">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-black shrink-0 mt-0.5" />
                  <span><strong>Geofenced Batching:</strong> Orders clustered within a 1.2km radius are evaluated concurrently to offer multi-drop efficiency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-black shrink-0 mt-0.5" />
                  <span><strong>Atomic Locking:</strong> Redis Lua scripts reserve driver assignment exclusively with a 15-second TTL window before fallback re-assignment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-black shrink-0 mt-0.5" />
                  <span><strong>Bidirectional gRPC:</strong> Drivers stream GPS updates via persistent gRPC channels rather than bloated HTTP POST payloads.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Interactive Topology & Live Benchmark Simulator */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Topology Board */}
            <div className="p-4 bg-black text-white border-2 border-black shadow-[5px_5px_0px_#000000] flex flex-col gap-3 font-label-code text-[12px]">
              <div className="flex justify-between items-center border-b border-white/20 pb-2">
                <span className="text-[#fae100] font-bold">SYSTEM_TOPOLOGY_V2</span>
                <span className="text-emerald-400 font-bold">RUNNING</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="p-2 bg-white text-black font-bold border border-black">
                  [1] Customer App
                  <div className="font-normal text-[#444748]">Flutter iOS / Android</div>
                </div>
                <div className="p-2 bg-white text-black font-bold border border-black">
                  [2] Merchant Tablet
                  <div className="font-normal text-[#444748]">POS WebSocket Client</div>
                </div>
                <div className="p-2 bg-white text-black font-bold border border-black">
                  [3] Courier Agent
                  <div className="font-normal text-[#444748]">Background Telemetry</div>
                </div>
                <div className="p-2 bg-[#fae100] text-black font-bold border border-black">
                  [4] Central Ops
                  <div className="font-normal text-black">Unified Super Admin</div>
                </div>
              </div>
              <div className="text-[11px] text-[#c8c6c5] pt-1">
                // gRPC gateway with Envoy proxy &amp; Redis Pub/Sub cluster
              </div>
            </div>

            {/* Interactive Concurrency Benchmark Simulator */}
            <div className="p-5 bg-white border-2 border-black shadow-[4px_4px_0px_#000000] flex flex-col gap-3">
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <div className="font-headline-sm text-[16px] font-bold text-black uppercase flex items-center gap-2">
                  <Activity size={18} />
                  Live Dispatch Benchmark
                </div>
                <span className="font-label-code text-[11px] text-[#444748]">TEST_CYCLE: #{simCount}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[12px] font-label-code">
                <div className="p-2 bg-[#f5f4ef] border border-black">
                  <div className="text-[#444748]">Active Couriers</div>
                  <div className="font-bold text-[14px] text-black">{metrics.activeCouriers} online</div>
                </div>
                <div className="p-2 bg-[#f5f4ef] border border-black">
                  <div className="text-[#444748]">Orders in Queue</div>
                  <div className="font-bold text-[14px] text-black">{metrics.ordersInFlight} orders</div>
                </div>
                <div className="p-2 bg-[#f5f4ef] border border-black">
                  <div className="text-[#444748]">Dispatch Latency</div>
                  <div className="font-bold text-[14px] text-emerald-700">{metrics.redisDispatchMs}</div>
                </div>
                <div className="p-2 bg-[#f5f4ef] border border-black">
                  <div className="text-[#444748]">Pickup Latency</div>
                  <div className="font-bold text-[14px] text-black">{metrics.avgPickupLatency}</div>
                </div>
              </div>

              <button
                onClick={runSimulation}
                disabled={simulating}
                className="w-full py-2.5 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer flex items-center justify-center gap-2"
              >
                {simulating ? (
                  <>
                    <RefreshCw size={15} className="animate-spin" />
                    <span>Calculating Hungarian Bipartite Match...</span>
                  </>
                ) : (
                  <>
                    <Play size={15} />
                    <span>Run Concurrency Surge Test</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Technical Architecture Snippet */}
        <section className="p-6 bg-white border-2 border-black shadow-[5px_5px_0px_#000000] flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-black pb-2">
            <div className="font-headline-sm text-[18px] font-bold text-black uppercase flex items-center gap-2">
              <Cpu size={18} />
              Geofenced Dispatch Algorithm (Go Microservice)
            </div>
            <span className="font-label-code text-[11px] text-[#444748]">
              src/dispatch/assigner.go
            </span>
          </div>

          <pre className="p-4 bg-[#1c1b1b] text-[#f2f1ec] font-label-code text-[12px] overflow-x-auto leading-relaxed border border-black">
{`// EvaluateGeofencedCouriers identifies nearest active courier with atomic lock
func (d *DispatchEngine) AssignOrder(ctx context.Context, orderID string, shopLocation GeoPoint) (*Courier, error) {
    // 1. Query Redis GeoSet for available riders within radius
    riders, err := d.redisClient.GeoSearch(ctx, "couriers:active", &redis.GeoSearchQuery{
        Longitude:  shopLocation.Lng,
        Latitude:   shopLocation.Lat,
        Radius:     1500, // 1.5km geofence
        RadiusUnit: "m",
        Sort:       "ASC",
        Count:      5,
    }).Result()
    if err != nil || len(riders) == 0 {
        return nil, ErrNoCouriersNearby
    }

    // 2. Execute Atomic Lua Script to claim first unreserved courier
    for _, rider := range riders {
        locked, _ := d.acquireReservationLock(ctx, rider.Name, orderID, 15*time.Second)
        if locked {
            // Dispatch real-time WebSocket push event
            go d.notifyCourierChannel(rider.Name, orderID)
            return &Courier{ID: rider.Name}, nil
        }
    }
    return nil, ErrContentionRetrying
}`}
          </pre>
        </section>

        {/* Bottom CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
          <button
            onClick={() => onNavigate('projects')}
            className="px-4 py-2 bg-white border-2 border-black font-headline-sm text-[14px] text-black shadow-[2px_2px_0px_#000000] hover:bg-[#efeee9] cursor-pointer"
          >
            ← Back to All Projects
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('services')}
              className="px-4 py-2 bg-white border-2 border-black font-headline-sm text-[14px] font-bold text-black shadow-[2px_2px_0px_#000000] hover:bg-[#fae100] cursor-pointer"
            >
              See System Design Services →
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2 bg-[#fae100] border-2 border-black font-headline-sm text-[14px] font-bold text-[#201c00] shadow-[3px_3px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] cursor-pointer"
            >
              Discuss Your Architecture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
